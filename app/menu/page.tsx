import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { soupBases } from "../site-data";

export const metadata: Metadata = {
  title: "Menu | LaMeiZi Hot Pot & BBQ",
  description:
    "Explore LaMeiZi hotpot soup bases, Korean BBQ, starters, sushi, and drinks in Tampa.",
};

const menuGroups = [
  {
    title: "Korean BBQ",
    description:
      "Marinated meats, premium cuts, seafood, and fresh vegetables grilled at your table.",
    image: "/images/restaurant/meat-selection-premium.webp",
  },
  {
    title: "Hotpot Ingredients",
    description:
      "Fresh meats, seafood, vegetables, noodles, tofu, and house dipping sauces for your broth.",
    image: "/images/restaurant/seafood-hotpot.webp",
  },
  {
    title: "Starters & Sushi",
    description:
      "Seafood boil, fried chicken wings, sushi, sashimi, and more to share around the table.",
    image: "/images/restaurant/sushi-rolls.webp",
  },
  {
    title: "Fruits",
    description:
      "Fresh fruit and lighter selections to keep the table bright between savory bites.",
    image: "/images/restaurant/fruit-bar.webp",
  },
];

export default function MenuPage() {
  return (
    <main>
      <SiteHeader current="menu" />
      <PageHero
        eyebrow="Our way, our menu"
        title="Build the meal you came for"
        description="Choose your broth, load the grill, mix your sauce, and keep the table moving."
        image="/images/restaurant/table-spread.webp"
      />

      <section className="content-section content-width">
        <div className="section-heading menu-soup-heading">
          <p className="eyebrow">Included with every hotpot</p>
          <h2>Eight soup bases</h2>
          <p>
            Spicy and Tom Yum broths can be ordered mild, medium, hot, or extra
            hot.
          </p>
        </div>
        <div className="soup-grid">
          {soupBases.map((soup) => (
            <article className="soup-item" key={soup.name}>
              <h3>{soup.name}</h3>
              <p>{soup.description}</p>
              {soup.note ? <strong>{soup.note}</strong> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="menu-categories">
        <div className="content-width">
          <div className="section-heading">
            <p className="eyebrow">Around the table</p>
            <h2>Grill, sides, sushi & fruit</h2>
            <p className="menu-note">
              Beverages are available à la carte and are not part of the
              all-you-can-eat menu.
            </p>
          </div>
          <div className="category-grid">
            {menuGroups.map((group) => (
              <article className="category-item" key={group.title}>
                <img src={group.image} alt="" />
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-cta content-width">
        <div>
          <p className="eyebrow">All-you-can-eat</p>
          <h2>Hotpot, BBQ, or both</h2>
        </div>
        <a className="button primary" href="/pricing">
          View Pricing
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
