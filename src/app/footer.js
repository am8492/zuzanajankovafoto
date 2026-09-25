import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <footer className="grid grid-col-1 bg-white shadow-sm text-sm text-gray-600/75 justify-center">
        <div className="w-full mx-auto max-w-screen-xl p-4 mitems-center justify-center">
          <div className="container mx-auto justify-between items-center">
             <div className="flex space-x-4 justify-center">
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
          </div>
          <br></br>
          <span>
            <p>Amatérská fotografka Zuzana Janková | Web od Aliny</p>
          </span>
        </div>
      </footer>
    </div>
  );
}