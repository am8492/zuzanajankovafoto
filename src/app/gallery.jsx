"use client";

//import ImageGallery from "react-image-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Swiper imports
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
    /*  original: photo.url,
    thumbnail: photo.url, */
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
        // modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={"auto"} // auto width for horizontal row
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {galleryItems.map((slide, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "200px" }} // each slide fixed width
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
/* 

  return (
       <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-indigo-600 md:col-span-2 text-white py-3 px-8 rounded-lg font-semibold tracking-wide shadow-md hover:bg-indigo-700 transition duration-200"
      >
        Otevřít
      </button>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt=""
                  className="cursor-pointer rounded shadow hover:opacity-90 transition"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                />
              ))}
            </div>
    <section>
      <div className="bg-colorPrimary">
        <section id="portfolio">
          <h2 className="titleH2 bg-colorPrimary">PORTFOLIO</h2>
          <Lightbox
            slides={galleryItems}
            open={open}
            close={() => setOpen(false)}
            /* showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={4000}
            slideOnThumbnailOver={true}
            showIndex={true} 
          ></Lightbox>
        </section>
      </div>
    </section>
  );
  
   */
