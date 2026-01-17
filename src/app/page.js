/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./globals.css";
import PortfolioGallery from "./portfolio";
//import ImageGallery from "react-image-gallery";
//import "react-image-gallery/styles/css/image-gallery.css";
import ContactForm from "./contactform";
import Pricing from "./pricing";
import Services from "./services";
import Head from "next/head";
import Footer from "./footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Photos from "./gallery";

export default function Home() {
  return (
    <div>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <header className="bg-white flex justify-end items-center h-20 ">
        {/* Logo */}

        <div className="flex items-center justify-start">
          <img
            src="logo/logo.png"
            alt="Zuzana Jankova Logo"
            className="py-2 h-12 md:h-20 align-middle"
          />
        </div>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <nav className="flex justify-end items-center">
          <ul className="flex space-x-4 text-sm md:text-lg font-semibold">
            <li>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-black transition-colors"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="#cenik"
                className="text-gray-700 hover:text-black transition-colors"
              >
                CENÍK
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="text-gray-700 hover:text-black transition-colors"
              >
                KONTAKT
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <img
        src="photos/DSC_0115.jpg"
        className="image-main"
        alt="Uvodni fotka"
      />
      <h2 className="titleH2">RODINNÁ FOTOGRAFKA</h2>
      <p className="text-primary px-4 md:px-32 font-extrabold">
        Jmenuji se Zuzka a jsem rodinná fotografka, která miluje zachycovat ty
        nejkrásnější momenty plné emocí, lásky a radosti. Fotím v Brně, Přerově
        a jejich okolí a každé focení je pro mě příležitostí vyprávět nový
        příběh – váš příběh. Fotografie mě provází už od mých začátků, kdy jsem
        se s foťákem v ruce rozhodla, že zachycovat vzpomínky není jen práce,
        ale hlavně vášeň. Baví mě přirozenost, spontánnost a chvíle, kdy se můžu
        stát součástí vašeho světa a zaznamenat ho přesně tak, jak ho prožíváte.
      </p>
      <div className="bg-white">
        <h2 className="titleH2">KDO JSEM</h2>
        <p className="text-secondary px-4 md:px-32 font-extrabold bg-white">
          Jako malá holka jsem chtěla být tanečnice. Fascinovala mě představa
          volnosti, elegance a toho, jak může každý pohyb vyprávět příběh. Ale
          místo tance na jevišti jsem nakonec oblékla popruh s foťákem. Místo
          toho, abych tančila, jsem začala zachycovat ty nejkrásnější
          choreografie života skrze objektiv. Bylo to jedno spontánní focení s
          kamarádkou Luckou, co mě dostalo na tuhle cestu – ani jedna jsme
          netušily, co z toho vznikne. Bylo to však tak veselé a upřímné, že
          jsem hned věděla, že tohle je „můj tanec“. Můj foťák se stal
          nástrojem, který dokáže zastavit čas, zachytit radost, lásku a všechny
          ty malé momenty, které tvoří naše příběhy. Mým cílem je jediné –
          přinést do fotek život a nechat vzpomínky tančit navždy. Chcete se
          taky stát součástí mého tanečního parketu? Zavolejte, napište – foťák
          mám vždy připravený na další roztančený příběh! 📸✨
        </p>
      </div>
      <Services />
      <div className="bg-white">
        <Photos />
      </div>
      <Pricing />
      <ContactForm />

      <Footer />
    </div>
  );
}
