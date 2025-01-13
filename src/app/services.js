import React from "react";
import "./globals.css";

export default function Services() {
  return (
    <div>
      <h2 className="titleH2">CO FOTÍM</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        <div className="flex flex-col p-8 items-center text-center rounded-lg bg-white">
          <img
            src="photos/DSC_0160new.jpg"
            alt="Rodinné příběhy"
            className="w-48 h-48 object-cover rounded-full shadow-2xl shadow-gray-700 mb-4"
          />
          <strong className="text-xl font-semibold text-gray-800 mb-2">
            Rodinné příběhy
          </strong>
          <span className="text-gray-600">
            Od každodenních okamžiků po výjimečné chvíle. Zachytím, co dělá vaši
            rodinu jedinečnou.
          </span>
        </div>
        <div className="flex flex-col p-8 items-center text-center rounded-lg bg-white">
          <img
            src="photos/DSC_0483.jpg"
            alt="Rodinné příběhy"
            className="w-48 h-48 object-cover rounded-full shadow-2xl shadow-gray-700 mb-4"
          />
          <strong className="text-xl font-semibold text-gray-800 mb-2">
            Partnerské fotografie
          </strong>
          <span className="text-gray-600">
            Milostné příběhy plné emocí a úsměvů. Ať už slavíte výročí,
            zasnoubení, nebo chcete jen krásné vzpomínky na společný čas.
          </span>
        </div>
        <div className="flex flex-col p-8 items-center text-center rounded-lg bg-white">
          <img
            src="photos/DSC_0037.jpg"
            alt="Rodinné příběhy"
            className="w-48 h-48 object-cover rounded-full shadow-2xl shadow-gray-700 mb-4"
          />
          <strong className="text-xl font-semibold text-gray-800 mb-2">
            Newborn
          </strong>
          <span className="text-gray-600">
            První dny vašeho miminka jsou nenahraditelné. Jemné fotky, které
            zachytí tyto křehké okamžiky.
          </span>
        </div>
        <div className="flex flex-col p-8 items-center text-center rounded-lg bg-white">
          <img
            src="photos/DSC_0692.jpg"
            alt="Rodinné příběhy"
            className="w-48 h-48 object-cover rounded-full shadow-2xl shadow-gray-700 mb-4"
          />
          <strong className="text-xl font-semibold text-gray-800 mb-2">
            Portréty
          </strong>
          <span className="text-gray-600">
            Fotky, které ukáží vaši osobnost v tom nejlepším světle. Ať už pro
            radost, jako dárek, nebo na památku.
          </span>
        </div>
      </div>
    </div>
  );
}
