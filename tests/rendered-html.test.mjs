import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the LaMeiZi restaurant site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>LaMeiZi Hot Pot &amp; BBQ \| Tampa<\/title>/i);
  assert.match(html, /辣妹子火锅烧烤/);
  assert.match(html, /2501 E Fowler Ave, Tampa FL 33612/);
  assert.match(html, /813-443-2287/);
  assert.match(html, /Reserve a Table/);
  assert.match(html, /Explore the menu/);
  assert.match(html, /See pricing &amp; dining terms/);
  assert.match(html, /View the Gallery/);
  assert.match(html, /VIP \+ Gift Cards/);
});

test("renders the separate menu, pricing, gallery, and visit pages", async () => {
  const routes = [
    ["/menu", /Eight soup bases/],
    ["/pricing", /Height-based pricing/],
    ["/gallery", /LaMeiZi in pictures/],
    ["/vip", /VIP system/],
    ["/visit", /2501 E Fowler Ave/],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expected, pathname);
  }
});

test("removes starter preview artifacts from the rendered page", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
});
