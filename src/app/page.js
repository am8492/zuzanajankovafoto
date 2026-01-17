/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./globals.css";
import ContactForm from "./contactform";
import Pricing from "./pricing";
import Services from "./services";
import Footer from "./footer";
import "yet-another-react-lightbox/styles.css";
import { Menu, X } from "lucide-react";
import Photos from "./gallery";

const links = [
  { name: "Portolio", href: "#portfolio" },
  { name: "Ceník", href: "#cenik" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <header className="fixed bg-white flex justify-end items-center h-20 ">
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
            href="https://www.facebook.com/Zuzana.jankova.foto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/zuzana.jankova.foto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <nav className="flex justify-end items-center mr-8">
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-transform: uppercase">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black-700 hover:text-indigo-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden ">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {open && (
            <div className=" md:hidden px-8 mr:0 pb-2 mt-16 space-y-2 bg-white pr-8 rounded-xl justify-items-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-800 transition text-transform: uppercase bg-white "
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
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
/* <ul className="flex space-x-4 text-sm md:text-lg font-semibold">
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
          </ul>*/
