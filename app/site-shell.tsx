import {
  directionsUrl,
  phoneDisplay,
  phoneUrl,
  siteAsset,
  sitePage,
  yelpUrl,
} from "./site-data";

const navigation = [
  { href: "/", label: "Home", id: "home" },
  { href: "/menu", label: "Menu", id: "menu" },
  { href: "/pricing", label: "Pricing", id: "pricing" },
  { href: "/vip", label: "VIP", id: "vip" },
  { href: "/visit", label: "Visit", id: "visit" },
  { href: "/gallery", label: "Gallery", id: "gallery" },
];

export function SiteHeader({ current }: { current: string }) {
  return (
    <header className="site-header" aria-label="Primary navigation">
      {/* The plain anchor keeps Vinext's local HMR navigation stable. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className="brand-lockup" href={sitePage("/")} aria-label="LaMeiZi home">
        <img src={siteAsset("/images/restaurant/logo-lameizi.png")} alt="LaMeiZi Hot Pot & BBQ" />
      </a>
      <nav aria-label="Main menu">
        {navigation.map((item) => (
          <a
            className={current === item.id ? "active" : undefined}
            href={sitePage(item.href)}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-reserve" href={yelpUrl}>
        Reserve
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-logo-plate">
          <img src={siteAsset("/images/restaurant/logo-lameizi.png")} alt="LaMeiZi Hot Pot & BBQ" />
        </div>
      </div>
      <div>
        <p className="footer-label">Visit</p>
        <a href={directionsUrl}>2501 E Fowler Ave, Tampa FL 33612</a>
        <p>Open daily 12:00 PM - 12:00 AM</p>
        <p>Last seating 11:00 PM</p>
      </div>
      <div>
        <p className="footer-label">Contact</p>
        <a href={phoneUrl}>{phoneDisplay}</a>
        <a href={yelpUrl}>Reserve on Yelp</a>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section
      className="page-hero"
      style={{ "--page-image": `url(${siteAsset(image)})` } as React.CSSProperties}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
