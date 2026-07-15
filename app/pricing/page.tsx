import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { ReserveLink } from "../reserve-link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Pricing | LaMeiZi Hot Pot & BBQ",
  description:
    "All-you-can-eat adult and child pricing and dining terms at LaMeiZi Hot Pot & BBQ in Tampa.",
};

const kidPrices = [
  { height: "4.8 ft & above", price: "$33.99" },
  { height: "4 ft - 4.8 ft", price: "$17.99" },
  { height: "3 ft - 4 ft", price: "$14.99" },
  { height: "Under 3 ft", price: "Free" },
];

export default function PricingPage() {
  return (
    <main>
      <SiteHeader current="pricing" />
      <PageHero
        eyebrow="All-you-can-eat pricing"
        title="Pick hotpot, BBQ, or enjoy both"
        description="Straightforward pricing for the whole table, with a two-hour dining time."
        image="/images/restaurant/meat-selection-premium.webp"
      />

      <section className="price-section content-width">
        <div className="section-heading">
          <p className="eyebrow">Adult price</p>
          <h2>Per person</h2>
        </div>
        <div className="adult-price-grid">
          <article>
            <p>Hotpot or BBQ</p>
            <strong>$33.99</strong>
          </article>
          <article className="price-highlight">
            <p>Both Hotpot and BBQ</p>
            <strong>$37.99</strong>
          </article>
        </div>
      </section>

      <section className="pricing-highlights content-width">
        <div className="section-heading">
          <p className="eyebrow">Every table starts here</p>
          <h2>More than one way to make the meal yours.</h2>
          <p>
            Your all-you-can-eat experience is built around the table: choose
            your broth, work the grill, and keep the whole group in the flow.
          </p>
        </div>
        <div className="pricing-highlights-grid">
          <article>
            <span>01</span>
            <h3>Eight soup bases</h3>
            <p>Go bright, savory, herbal, or spicy and make the broth your own.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Hotpot and Korean BBQ</h3>
            <p>Choose one style or bring both to the same shared table.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Build your sauce</h3>
            <p>Finish every bite with the mix of sauces, herbs, and garnishes you like.</p>
          </article>
        </div>
      </section>

      <section className="kid-price-section">
        <div className="content-width kid-price-layout">
          <div className="section-heading light-heading">
            <p className="eyebrow">Kid price</p>
            <h2>Height-based pricing</h2>
            <p>
              Prices shown are for hotpot or BBQ. Add $4.99 for both. Staff
              determines height measurement.
            </p>
          </div>
          <div className="kid-price-table" role="table" aria-label="Kid pricing">
            {kidPrices.map((item) => (
              <div role="row" key={item.height}>
                <span role="cell">{item.height}</span>
                <strong role="cell">{item.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="terms-section content-width">
        <div className="section-heading">
          <p className="eyebrow">Before you dine</p>
          <h2>Dining terms</h2>
        </div>
        <div className="terms-list">
          <article>
            <span>01</span>
            <div>
              <h3>Two-hour dining time</h3>
              <p>All-you-can-eat service is limited to two hours.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Parties of five or more</h3>
              <p>
                An automatic 18% gratuity is added and includes all party
                members.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Unfinished food</h3>
              <p>
                LaMeiZi reserves the right to apply a $12.99 per pound
                surcharge for unfinished food.
              </p>
            </div>
          </article>
        </div>
        <ReserveLink className="button primary">
          Reserve a Table
        </ReserveLink>
      </section>
      <SiteFooter />
    </main>
  );
}
