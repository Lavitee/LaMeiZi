import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import {
  directionsUrl,
  newUploadPhotos,
  phoneDisplay,
  phoneUrl,
} from "../site-data";
import { ReserveLink } from "../reserve-link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Visit | LaMeiZi Hot Pot & BBQ",
  description:
    "Find LaMeiZi Hot Pot & BBQ at 2501 E Fowler Ave in Tampa. Open daily from noon to midnight.",
};

export default function VisitPage() {
  return (
    <main>
      <SiteHeader current="visit" />
      <PageHero
        eyebrow="Visit LaMeiZi in Tampa"
        title="Your table is waiting near USF"
        description="Gather around all-you-can-eat hotpot and Korean BBQ, open daily from noon until midnight."
        image={newUploadPhotos.exterior}
      />

      <section className="visit-layout content-width">
        <div className="visit-primary">
          <p className="eyebrow">Address</p>
          <h2>2501 E Fowler Ave</h2>
          <p>Tampa, FL 33612</p>
          <div className="button-row">
            <a className="button primary" href={directionsUrl}>
              Get Directions
            </a>
            <ReserveLink className="button outline">
              Reserve a Table
            </ReserveLink>
          </div>
        </div>
        <div className="visit-details">
          <article>
            <p className="eyebrow">Hours</p>
            <h3>Monday - Sunday</h3>
            <strong>12:00 PM - 12:00 AM</strong>
            <span>Last seating 11:00 PM</span>
          </article>
          <article>
            <p className="eyebrow">Call us</p>
            <h3>Questions or large parties?</h3>
            <a href={phoneUrl}>{phoneDisplay}</a>
          </article>
        </div>
      </section>

      <section className="visit-photo-strip content-width" aria-label="LaMeiZi restaurant photos">
        <figure>
          <img
            src={newUploadPhotos.exteriorAlt}
            alt="LaMeiZi restaurant entrance in Tampa"
          />
          <figcaption>Easy to spot near USF</figcaption>
        </figure>
        <figure>
          <img
            src={newUploadPhotos.lobby}
            alt="LaMeiZi lobby with the restaurant logo and panda statue"
          />
          <figcaption>Walk in and settle around the table</figcaption>
        </figure>
      </section>

      <section className="arrival-band">
        <div className="content-width">
          <p className="eyebrow">Meet us at the table</p>
          <h2>Make a night of it.</h2>
          <p>
            Come hungry, settle in, choose your broth, and let the hotpot and
            Korean BBQ keep the conversation going.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
