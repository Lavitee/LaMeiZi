"use client";

import { useEffect } from "react";
import { siteAsset, yelpUrl } from "../site-data";

export default function ReservePage() {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      window.location.assign(yelpUrl);
    }, 800);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return (
    <main className="reserve-transition" role="status" aria-live="polite">
      <meta httpEquiv="refresh" content={`1;url=${yelpUrl}`} />
      <div className="reserve-transition-content">
        <div className="reserve-transition-logo">
          <img
            src={siteAsset("/images/restaurant/logo-lameizi.png")}
            alt="LaMeiZi Hot Pot & BBQ"
          />
        </div>
        <p className="eyebrow">Reservations</p>
        <h1>Heading to Yelp</h1>
        <span className="reserve-spinner" aria-hidden="true" />
        <p>Opening the reservation page...</p>
      </div>
    </main>
  );
}
