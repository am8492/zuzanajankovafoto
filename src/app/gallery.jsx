"use client";

import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then(setPhotos)
      .catch(console.error);
  }, []);

  const galleryItems = photos.map((photo) => ({
    original: photo.url,
    thumbnail: photo.url,
  }));

  return (
    <section>
   
      <div className="bg-colorPrimary">
        <section id="portfolio">
          <h2 className="titleH2 bg-colorPrimary">PORTFOLIO</h2>
          <ImageGallery
            items={galleryItems}
            showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={4000}
            slideOnThumbnailOver={true}
            showIndex={true}
          ></ImageGallery>
        </section>
      </div>
    </section>
  );
}
