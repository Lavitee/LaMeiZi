import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { galleryPhotos } from "../site-data";

export const metadata: Metadata = {
  title: "Gallery | LaMeiZi Hot Pot & BBQ",
  description:
    "See the food, buffet, hotpot, Korean BBQ, and dining experience at LaMeiZi in Tampa.",
};

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader current="gallery" />
      <PageHero
        eyebrow="Inside LaMeiZi"
        title="Come hungry. Leave happy."
        description="A look at the buffet, hotpot, grill, starters, and the food we share around the table."
        image="/images/restaurant/dining-room.webp"
      />

      <section className="gallery-section content-width">
        <div className="section-heading">
          <p className="eyebrow">Food & atmosphere</p>
          <h2>LaMeiZi in pictures</h2>
        </div>
        <div className="photo-grid">
          {galleryPhotos.map((photo) => (
            <figure className={photo.className} key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
