"use client";
import React from "react";
import "./globals.css";
import PortfolioGallery from "./portfolio";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ContactForm from "./contactform";
import Pricing from "./pricing";
import Services from "./services";

export default function Home() {
  return (
    <div>
      <header className="bg-white flex justify-end items-center h-20 ">
        {/* Logo */}

        <div className="flex items-center justify-start">
          <img
            src="logo/logo.png"
            alt="Zuzana Jankova Logo"
            className="py-2 h-12 md:h-20 align-middle"
          />
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

      <img src="photos/DSC_0115.jpg" className="image-main" />
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
        <PortfolioGallery />
      </div>
      <Pricing />
      <ContactForm />

      <footer></footer>
    </div>
  );
}
/*  <div className="text-primary md:px-32 font-extrabold">
        <h2 className="titleH2">CO FOTÍM</h2>
        <ul className="px-4 md:px-32 m-1 space-y-10 ">
          <li>
            <p>
              Rodinné příběhy: Od každodenních okamžiků po výjimečné chvíle.
              Zachytím, co dělá vaši rodinu jedinečnou.
            </p>
          </li>
          <li>
            <p>
              Partnerské fotografie: Milostné příběhy plné emocí a úsměvů. Ať už
              slavíte výročí, zasnoubení, nebo chcete jen krásné vzpomínky na
              společný čas.
            </p>
          </li>
          <li>
            <p>
              Newborn: První dny vašeho miminka jsou nenahraditelné. Jemné
              fotky, které zachytí tyto křehké okamžiky.{" "}
            </p>
          </li>
          <li>
            <p>
              Portréty: Fotky, které ukáží vaši osobnost v tom nejlepším světle.
              Ať už pro radost, jako dárek, nebo na památku.{" "}
            </p>
          </li>
        </ul>
      </div>*/
