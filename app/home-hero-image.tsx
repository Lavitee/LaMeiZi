"use client";

import { useEffect, useState } from "react";

type HomeHeroImageProps = {
  daySrc: string;
  nightSrc: string;
};

function getTampaHour() {
  const hourPart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: false,
    timeZone: "America/New_York",
  })
    .formatToParts(new Date())
    .find((part) => part.type === "hour");

  const hour = Number(hourPart?.value ?? 0);
  return hour === 24 ? 0 : hour;
}

function isTampaNight() {
  const hour = getTampaHour();
  return hour < 7 || hour >= 18;
}

export function HomeHeroImage({ daySrc, nightSrc }: HomeHeroImageProps) {
  const [night, setNight] = useState(false);

  useEffect(() => {
    const updateTimeOfDay = () => setNight(isTampaNight());

    updateTimeOfDay();
    const timer = window.setInterval(updateTimeOfDay, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <img
      className="home-hero-image"
      src={night ? nightSrc : daySrc}
      alt={
        night
          ? "LaMeiZi Hot Pot & BBQ glowing at night"
          : "LaMeiZi Hot Pot & BBQ restaurant exterior in daylight"
      }
      fetchPriority="high"
    />
  );
}
