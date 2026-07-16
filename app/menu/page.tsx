import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { newUploadPhotos, siteAsset, sitePage, soupBases } from "../site-data";

export const dynamic = "force-static";

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
    image: newUploadPhotos.koreanBbqFeature,
  },
  {
    title: "Hotpot Ingredients",
    description:
      "Fresh meats, seafood, vegetables, noodles, tofu, and house dipping sauces for your broth.",
    image: newUploadPhotos.hotpotIngredientsFeature,
  },
  {
    title: "Sushi & Seafood",
    description:
      "Fresh salmon sashimi, sushi rolls, seafood starters, and shareable bites for the table.",
    image: newUploadPhotos.seafoodFeast,
  },
  {
    title: "Fruits, drinks & sweets",
    description:
      "Fresh fruit, colorful drinks, ice cream, and sweets to keep the table bright between savory bites.",
    image: newUploadPhotos.drinksDesserts,
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
        image={newUploadPhotos.hotpotPlatter}
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
              {soup.image ? (
                <img className="soup-item-image" src={siteAsset(soup.image)} alt="" />
              ) : null}
              <div className="soup-item-copy">
              <h3>{soup.name}</h3>
              <p>{soup.description}</p>
              {soup.note ? <strong>{soup.note}</strong> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-categories">
        <div className="content-width">
          <div className="section-heading">
            <p className="eyebrow">Around the table</p>
            <h2>Grill, sides, sushi, fruit & drinks</h2>
            <p className="menu-note">
              Beverages are available à la carte and are not part of the
              all-you-can-eat menu.
            </p>
          </div>
          <div className="category-grid">
            {menuGroups.map((group) => (
              <article className="category-item" key={group.title}>
                <img src={siteAsset(group.image)} alt="" />
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
        <a className="button primary" href={sitePage("/pricing")}>
          View Pricing
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
