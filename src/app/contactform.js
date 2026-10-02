"use client";

import React, { useState } from "react";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "rodinneFotografie",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // simple client-side validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Vyplňte prosím jméno, e-mail a vzkaz.");
      return;
    }

    setLoading(true);
    try {
      const emailBody = `Ahoj Zuzko,\n\nje tu nová poptávka po focení.\n\nJméno: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\nSlužba: ${formData.service}\nVzkaz: ${formData.message}`;

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "jankovazuzana0@gmail.com",
          subject: "Nová poptávka po focení",
          text: emailBody,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(data?.error || "Chyba při odesílání. Zkuste to prosím znovu.");
      }
    } catch (err) {
      setError("Chyba sítě. Zkuste to prosím znovu.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 relative">
      {/* Floating CTA (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8">
        <a
          href="#kontakt"
          className="bg-[var(--brand-600)] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[var(--brand-500)] transition"
          aria-label="Otevřít kontaktní formulář"
        >
          Kontakt
        </a>
      </div>

      {!isSubmitted ? (
        <section id="kontakt">
          <h2 className="titleH2">KONTAKTNÍ FORMULÁŘ</h2>
          {error && <p className="text-red-600 mt-2">{error}</p>}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            aria-label="Kontaktni formular"
          >
            <div>
              <label className="text-lg font-semibold text-gray-700">
                Jméno
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-gray-700">
                Váš email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-lg font-semibold text-gray-700">
                Váš telefon (volitelně)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-lg font-semibold text-gray-700">
                Služba
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="rodinneFotografie">Rodinné fotografie</option>
                <option value="portretniFotofrafie">
                  Portrétní fotografie
                </option>
                <option value="paroveFotografie">Párové fotografie</option>
                <option value="newbornFotografie">Newborn fotografie</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-lg font-semibold text-gray-700 md:col-span-1">
                Vzkaz
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-4 h-40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="text-center md:col-span-2">
              <button
                type="submit"
                className="bg-[var(--brand-600)] md:col-span-2 text-white py-3 px-8 rounded-lg font-semibold tracking-wide shadow-md hover:bg-[var(--brand-500)] transition duration-200 disabled:opacity-50"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Odesílání..." : "Odeslat"}
              </button>
            </div>
          </form>
        </section>
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="titleH2">Díky — ozvu se ti brzy!</h2>
          <p className="mt-2">
            Děkuji za poptávku, brzy ti napíšu nebo zavolám zpět.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="#portfolio"
              className="text-[var(--brand-600)] hover:underline"
            >
              Prohlédnout galerie
            </a>
            <a
              href="#cenik"
              className="text-[var(--brand-600)] hover:underline"
            >
              Ceník
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
