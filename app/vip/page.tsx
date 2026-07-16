import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { newUploadPhotos, phoneDisplay, phoneUrl, vipTiers } from "../site-data";
import { VipTierSelector } from "../vip-tier-selector";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "VIP + Gift Cards | LaMeiZi Hot Pot & BBQ",
  description:
    "LaMeiZi VIP card value tiers and gift card information for hotpot and BBQ guests in Tampa.",
};

export default function VipPage() {
  return (
    <main>
      <SiteHeader current="vip" />
      <PageHero
        eyebrow="Bring the table back"
        title="VIP value for your next meal"
        description="Load your LaMeiZi VIP card, share it with your favorite people, and get more value every time you come back."
        image={newUploadPhotos.vipCard}
      />

      <section className="vip-intro content-width">
        <div className="section-heading">
          <p className="eyebrow">LaMeiZi VIP system</p>
          <h2>More on the card. More around the table.</h2>
          <p>
            Choose a load amount below and see the total dining value you
            receive at a glance.
          </p>
        </div>
        <VipTierSelector
          phoneDisplay={phoneDisplay}
          phoneUrl={phoneUrl}
          tiers={vipTiers}
        />
      </section>

      <section className="vip-details">
        <div className="content-width vip-details-layout">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>A simple way to keep the next meal ready.</h2>
            <div className="vip-steps">
              <article>
                <span>01</span>
                <div>
                  <h3>Choose your value</h3>
                  <p>Pick the VIP card tier that fits your group and how often you visit.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Use it at LaMeiZi</h3>
                  <p>Bring the card to the restaurant and use the loaded value toward your meal.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Share the table</h3>
                  <p>Give the gift of hotpot and BBQ to family, friends, and the people you bring back.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="vip-contact content-width">
        <div>
          <p className="eyebrow">Gift cards</p>
          <h2>A thoughtful gift for the next gathering.</h2>
          <p>
            The online gift card purchase system will be connected here once
            its official link is added. For now, call the restaurant for VIP
            and gift card questions.
          </p>
        </div>
        <a className="button primary" href={phoneUrl}>
          Call {phoneDisplay}
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
