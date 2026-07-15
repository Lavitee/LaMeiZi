import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/client");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/LaMeiZi";
const textExtensions = new Set([".css", ".html", ".js", ".json", ".map", ".rsc"]);

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await filesIn(entryPath)));
    } else if (textExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }

  return files;
}

if (!(await stat(outputDirectory).catch(() => null))) {
  throw new Error(`Missing static output directory: ${outputDirectory}`);
}

for (const filePath of await filesIn(outputDirectory)) {
  const source = await readFile(filePath, "utf8");
  const prefixed = source.replace(
    /(["'(=])\/assets\//g,
    `$1${basePath}/assets/`,
  );

  if (prefixed !== source) {
    await writeFile(filePath, prefixed);
  }
}
