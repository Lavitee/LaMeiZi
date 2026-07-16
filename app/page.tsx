import { SiteFooter, SiteHeader } from "./site-shell";
import { ReserveLink } from "./reserve-link";
import { HomeHeroImage } from "./home-hero-image";
import {
  directionsUrl,
  phoneDisplay,
  phoneUrl,
  newUploadPhotos,
  siteAsset,
  sitePage,
} from "./site-data";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />

      <section
        className="home-hero"
        aria-label="LaMeiZi Hot Pot and BBQ"
      >
        <HomeHeroImage
          daySrc={siteAsset(newUploadPhotos.exterior)}
          nightSrc={siteAsset(newUploadPhotos.nightExterior)}
        />
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
            <ReserveLink className="button primary">
              Reserve a Table
            </ReserveLink>
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
            <img src={siteAsset(newUploadPhotos.hotpotPlatter)} alt="LaMeiZi hotpot ingredients" />
            <figcaption>Traditional Chinese Hotpot</figcaption>
          </figure>
          <figure>
            <img src={siteAsset(newUploadPhotos.bbqPlatter)} alt="LaMeiZi Korean BBQ meats and seafood" />
            <figcaption>Premium Korean BBQ</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-gallery-callout">
        <img
          src={siteAsset(newUploadPhotos.crawfishOysters)}
          alt="Bright red crawfish, oysters, shrimp, and shellfish prepared for the LaMeiZi table"
        />
        <div>
          <p className="eyebrow">More than the grill</p>
          <h2>Crawfish, oysters & seafood</h2>
          <p>
            Bring the table to life with bright seafood, fresh shellfish, sushi,
            tea, and sweets.
          </p>
          <a className="button dark" href={sitePage("/gallery")}>
            View the Gallery
          </a>
        </div>
      </section>

      <section className="home-broth-feature">
        <div className="content-width home-broth-feature-layout">
          <div className="home-broth-feature-copy">
            <p className="eyebrow">Find your favorite broth</p>
            <h2>Eight broths. One table.</h2>
            <p>
              Go bright with Tom Yum, settle into a restorative herbal broth,
              or turn up the heat with our Sichuan red-oil soup. Everyone at
              the table can find a favorite way to cook.
            </p>
            <a className="text-link" href={sitePage("/menu")}>
              Explore all soup bases
            </a>
          </div>
          <figure>
            <img
              src={siteAsset(newUploadPhotos.soupLineup)}
              alt="A selection of LaMeiZi hotpot soup bases"
            />
            <figcaption>Choose a broth, then build the table around it.</figcaption>
          </figure>
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
          <ReserveLink className="button outline">
            Reserve on Yelp
          </ReserveLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
