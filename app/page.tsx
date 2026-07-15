import { SiteFooter, SiteHeader } from "./site-shell";
import {
  directionsUrl,
  phoneDisplay,
  phoneUrl,
  siteAsset,
  sitePage,
  yelpUrl,
} from "./site-data";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />

      <section
        className="home-hero"
        aria-label="LaMeiZi Hot Pot and BBQ"
        style={
          {
            "--hero-image": `url(${siteAsset("/images/restaurant/homepage-hero.webp")})`,
          } as React.CSSProperties
        }
      >
        <div className="home-hero-copy">
          <p className="eyebrow">Tampa all-you-can-eat hotpot & barbecue</p>
          <h1>
            LaMeiZi
            <span>辣妹子火锅烧烤</span>
          </h1>
          <p>
            Bubbling broths, sizzling grill plates, a full sauce bar, and a
            table made for sharing.
          </p>
          <div className="button-row">
            <a className="button primary" href={yelpUrl}>
              Reserve a Table
            </a>
            <a className="button light" href={phoneUrl}>
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="quick-facts" aria-label="Restaurant quick information">
        <div>
          <strong>Open daily</strong>
          <span>12 PM - 12 AM</span>
        </div>
        <div>
          <strong>Last seating</strong>
          <span>11 PM</span>
        </div>
        <div>
          <strong>All you can eat</strong>
          <span>Hotpot, BBQ, or both</span>
        </div>
        <a href={directionsUrl}>
          <strong>Near USF</strong>
          <span>2501 E Fowler Ave, Tampa</span>
        </a>
      </section>

      <section className="home-intro content-width">
        <div className="home-intro-copy">
          <p className="eyebrow">Choose your experience</p>
          <h2>One table. Two ways to cook.</h2>
          <p>
            Build a hotpot from eight soup bases, grill Korean BBQ at your
            table, or enjoy both in one all-you-can-eat meal.
          </p>
          <div className="text-links">
            <a href={sitePage("/menu")}>Explore the menu</a>
            <a href={sitePage("/pricing")}>See pricing & dining terms</a>
          </div>
        </div>
        <div className="duo-images" aria-label="Hotpot and Korean barbecue">
          <figure>
          <img src={siteAsset("/images/restaurant/seafood-hotpot.webp")} alt="LaMeiZi hotpot spread" />
            <figcaption>Traditional Chinese Hotpot</figcaption>
          </figure>
          <figure>
          <img src={siteAsset("/images/restaurant/meat-selection-premium.webp")} alt="LaMeiZi Korean BBQ meat" />
            <figcaption>Premium Korean BBQ</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-gallery-callout">
        <img
          src={siteAsset("/images/restaurant/seafood-selection.webp")}
          alt="Seafood, crab, shrimp, oysters, and hotpot at LaMeiZi"
        />
        <div>
          <p className="eyebrow">More than the grill</p>
          <h2>Starters, sushi, tea, smoothies & cocktails</h2>
          <p>
            See the food, dining room, buffet, and table experience before you
            visit.
          </p>
          <a className="button dark" href={sitePage("/gallery")}>
            View the Gallery
          </a>
        </div>
      </section>

      <section className="vip-banner content-width">
        <div>
          <p className="eyebrow">VIP + Gift Cards</p>
          <h2>Give the next hotpot night more value.</h2>
          <p>
            Load a LaMeiZi VIP card for your group, or keep the next dinner
            ready as a gift.
          </p>
        </div>
          <a className="button dark" href={sitePage("/vip")}>
          See VIP Benefits
        </a>
      </section>

      <section className="visit-cta content-width">
        <div>
          <p className="eyebrow">Visit LaMeiZi</p>
          <h2>Lunch, dinner, and late-night hotpot in Tampa</h2>
        </div>
        <div className="visit-cta-actions">
          <a className="button primary" href={sitePage("/visit")}>
            Hours & Directions
          </a>
          <a className="button outline" href={yelpUrl}>
            Reserve on Yelp
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
