"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then(setPhotos)
      .catch(console.error);
  }, []);

  const galleryItems = photos.map((photo) => ({
    src: photo.url,
  }));
  console.log(photos.url);

  return (
    <section>
      <div className="bg-colorPrimary">
        <section id="portfolio">
          <h2 className="titleH2 bg-colorPrimary">PORTFOLIO</h2>
          <>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={galleryItems}
              plugins={[Zoom]}
              index={index}
            />
          </>{" "}
        </section>
      </div>
      <Swiper
        spaceBetween={8}
        slidesPerView={"auto"} 
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {galleryItems.map((slide, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "200px" }} 
          >
            <img
              src={slide.src}
              alt=""
              className="cursor-pointer rounded-lg shadow-lg hover:opacity-90 transition w-full"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </section>
  );
}
