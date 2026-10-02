/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useState } from "react";
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
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md flex items-center h-20 z-30">
        <div className="container-centered relative flex items-center justify-between w-full">
          <div className="flex items-center">
            <img
              src="logo/logo.png"
              alt="Zuzana Jankova Logo"
              className="py-2 h-12 md:h-16"
            />
          </div>

          {/* Centered navigation (desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 uppercase">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-[var(--brand-600)] transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <nav className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.facebook.com/Zuzana.jankova.foto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/zuzana.jankova.foto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#kontakt"
                className="ml-4 bg-[var(--brand-600)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[var(--brand-500)] transition"
              >
                Kontakt
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-gray-700 hover:text-[var(--brand-600)] transition"
                aria-label="Toggle menu"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-4 mt-16 space-y-2 bg-white/95 rounded-xl w-full">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-[var(--brand-600)] transition uppercase py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-2">
              <a
                href="#kontakt"
                className="bg-[var(--brand-600)] text-white px-4 py-2 rounded-md"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative mt-20">
        <img
          src="photos/DSC_0115.jpg"
          className="image-main w-full"
          alt="Uvodni fotka"
        />
        <div className="absolute inset-0 flex items-start pt-12 md:px-20">
          <div className="container-centered mx-auto text-white">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-md">
                Rodinná fotografka
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-95">
                Jmenuji se Zuzka a zachycuji přirozené, emotivní okamžiky rodin
                v Brně, Přerově a okolí. Fotografuji s cílem vytvořit autentické
                vzpomínky, které vydrží.
              </p>
              <a
                href="#kontakt"
                className="inline-block mt-6 bg-[var(--brand-600)] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[var(--brand-500)] transition"
              >
                Objednat focení
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">KDO JSEM</h2>
          <div className="about-copy">
            <p className="about-lead">
              Jako malá holka jsem chtěla být tanečnice. Fascinovala mě
              představa volnosti, elegance a toho, jak může každý pohyb vyprávět
              příběh.
            </p>
            <p>
              Ale místo tance na jevišti jsem nakonec oblékla popruh s foťákem.
              Místo toho, abych tančila, jsem začala zachycovat ty nejkrásnější
              choreografie života skrze objektiv. Bylo to jedno spontánní focení
              s kamarádkou Luckou, co mě dostalo na tuhle cestu – ani jedna jsme
              netušily, co z toho vznikne. Bylo to však tak veselé a upřímné,
              že jsem hned věděla, že tohle je „můj tanec“.
            </p>
            <p>
              Můj foťák se stal nástrojem, který dokáže zastavit čas, zachytit
              radost, lásku a všechny ty malé momenty, které tvoří naše příběhy.
              Mým cílem je jediné – přinést do fotek život a nechat vzpomínky
              tančit navždy.
            </p>
            <p className="about-finale">
              Chcete se taky stát součástí mého tanečního parketu? Zavolejte,
              napište – foťák mám vždy připravený na další  příběh!
            </p>
          </div>
        </div>
      </section>
      <Services />
      <Photos />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}
