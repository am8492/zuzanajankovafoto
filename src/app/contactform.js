import React, { useState } from "react";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendEmail = async (emailText) => {
    setIsSubmitted(true);
    let emailBody = `Ahoj Zuzko,
    
    je tu nová poptávka po focení.
    
    Jméno: ${formData.name}
    Email: ${formData.email}
    Telefon: ${formData.phone}
    Služba: ${formData.service}
    Vzkaz: ${formData.message}`;

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "jankovazuzana0@gmail.com",
        subject: "Nová poptávka po focení",
        text: emailBody,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Email sent successfully!");
    } else {
      console.error("Error sending email:", data.error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      {!isSubmitted ? (
        <section id="kontakt">
          <h2 className="titleH2">KONTAKTNÍ FORMULÁŘ</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                Váš telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
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
                className="bg-indigo-600 md:col-span-2 text-white py-3 px-8 rounded-lg font-semibold tracking-wide shadow-md hover:bg-indigo-700 transition duration-200"
                onClick={sendEmail}
              >
                Odeslat
              </button>
            </div>
          </form>
        </section>
      ) : (
        <div>
          <h2 className="titleH2">Díky, ozvu se ti. Zuzka</h2>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
