import React from "react";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faBabyCarriage,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Pricing() {
  return (
    <div className="py-10 bg-white">
      <section id="cenik">
        <h2 className="titleH2">CENÍK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 text-center">
          <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faPeopleGroup} className="h-16" />
            <strong className="text-xl font-semibold text-gray-800 mb-4">
              Rodinné fotografie a párové fotografie
            </strong>
            <p className="text-gray-600 text-sm">
              <strong>MALÝ BALÍČEK:</strong> cca 30 minut focení, až 15 fotek
            </p>
            <p className="text-gray-600 text-sm mt-2">
              <strong> 900Kč</strong>
            </p>
            <br />
            <p className="text-gray-600 text-sm mt-2">
              <strong>VELKÝ BALÍČEK:</strong> cca 1-1,5 hodiny focení, až 40
              fotek
            </p>
            <p className="text-gray-600 text-sm mt-2">
              <strong> 1800Kč</strong>
            </p>
          </div>

          <div className="bg-gray-200  rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faImagePortrait} className=" h-16" />
            <strong className="text-xl font-semibold text-gray-800 mb-4">
              Portrétní fotografie
            </strong>
            <p className="text-gray-600 text-sm">
              cca1 hodina focení, až 40 fotek
            </p>
            <p className="text-gray-600 text-sm mt-2">
              <strong> 1500Kč</strong>
            </p>
          </div>

          <div className="bg-gray-200  rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faBabyCarriage} className=" h-16" />
            <strong className="text-xl font-semibold text-gray-800 mb-4">
              Newborn fotografie
            </strong>
            <p className="text-gray-600 text-sm">
              až 2 hodiny focení, přijedu k vám domů, až 15 fotek
              <br /> <strong> 2000Kč</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
