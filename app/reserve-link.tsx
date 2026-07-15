"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useState } from "react";
import { siteAsset, yelpUrl } from "./site-data";

type ReserveLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
};

export function ReserveLink({ children, className, onClick, ...props }: ReserveLinkProps) {
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    window.setTimeout(() => {
      window.location.assign(yelpUrl);
    }, 420);
  }

  return (
    <>
      <a
        {...props}
        aria-busy={isLoading || undefined}
        className={className}
        href={yelpUrl}
        onClick={handleClick}
      >
        {children}
      </a>
      {isLoading ? (
        <div className="reserve-transition" role="status" aria-live="polite">
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
        </div>
      ) : null}
    </>
  );
}
