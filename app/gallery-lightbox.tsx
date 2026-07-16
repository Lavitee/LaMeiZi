"use client";

import { useEffect, useState } from "react";

export function GalleryLightbox({
  alt,
  caption,
  src,
}: {
  alt: string;
  caption: string;
  src: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="gallery-photo-trigger"
        type="button"
        aria-label={`View ${caption} full size`}
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} />
      </button>

      {open ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={caption}>
          <button
            className="gallery-lightbox-scrim"
            type="button"
            aria-label="Close full image"
            onClick={() => setOpen(false)}
          />
          <div className="gallery-lightbox-content">
            <button
              className="gallery-lightbox-close"
              type="button"
              aria-label="Close full image"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <img src={src} alt={alt} />
            <p>{caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
