"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setPhotos(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load photos", err);
        setPhotos([]);
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  const slides = photos
    .filter((p) => {
      if (!p) return false;
      if (!p.url || typeof p.url !== "string") return false;
      const url = p.url.trim();
      if (!url) return false;
      // skip folder-like entries that end with '/'
      if (url.endsWith("/")) return false;
      // basic allowlist: absolute URLs or root-relative paths
      if (url.startsWith("http") || url.startsWith("/")) return true;
      return false;
    })
    .map((p) => ({ src: p.url.trim(), alt: p.pathname || "photo" }));

  return (
    <section className="py-12">
      <div id="portfolio" className="container-centered">
        <h2 className="titleH2">PORTFOLIO</h2>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          plugins={[Zoom]}
          index={index}
        />

        {loading ? (
          <p className="text-center text-[var(--muted)] mt-6">
            Načítání fotografií…
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="block w-full text-left rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)]"
                aria-label={`Otevřít fotografii ${i + 1}`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full h-56 object-cover rounded-lg shadow-md hover:opacity-90 transition"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
