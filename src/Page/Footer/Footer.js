import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../Assets/Azem.png"; 

const Footer = () => {
  return (
    <footer className="w-full bg-stone-500 text-white">
      <div className="w-full flex items-center justify-center space-x-6 py-6  border-stone-600">
        <a
          href="https://www.instagram.com/azemgroup_?igsh=MWNkYmN3aXhiOGhuNg%3D%3D&utm_source=qr"
          className="text-stone-300 hover:text-yellow-400 transition transform hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl" />
        </a>
        <a
          href="https://www.youtube.com/@azemgroup36"
          className="text-stone-300 hover:text-yellow-400 transition transform hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube className="text-3xl" />
        </a>
        <a
          href="https://www.facebook.com/share/h4sZSzCCcaeXtkKS/?mibextid=LQQJ4d"
          className="text-stone-300 hover:text-yellow-400 transition transform hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-3xl" />
        </a>
        <a
          href="https://x.com/azemgroup_?s=21"
          className="text-stone-300 hover:text-yellow-400 transition transform hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <TiSocialTwitter className="text-4xl" />
        </a>
      </div>

      <div className="w-full text-center py-6 bg-stone-500">
        <h1 className="text-5xl font-handwriting text-yellow-400 hover:text-yellow-500 transition">
          Kaliteli İnşaat İçin Azem Yapı
        </h1>
      </div>

      <div className="w-full flex flex-col items-center px-6  bg-stone-500 text-white">
        <div className="">
          <img src={logo} alt="Azem Yapı Logo" className="w-60 md:w-72 h-auto" />
        </div>

        <div className="w-full flex flex-wrap justify-center gap-8 text-center px-8 pb-6">
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <FaMapMarkerAlt className="text-xl text-stone-200" />
            <p className="text-stone-200">Cumhuriyet, Şehit Er Hayrettin Balk Sokak No.4, 36000 Kars Merkez/Kars</p>
          </div>
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <FaPhone className="text-xl text-stone-200" />
            <a href="tel:+5321753421" className="hover:underline text-stone-200">+532 175 34 21</a>
          </div>
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <FaEnvelope className="text-xl text-stone-200" />
            <a href="mailto:azem.36yapi@gmail.com" className="hover:underline text-stone-200">azem.36yapi@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="w-full text-center py-4 bg-stone-700">
        <div className="flex items-center justify-center space-x-4 text-xs md:text-sm">
          <p className="font-semibold tracking-widest text-stone-200">EMYA MEDYA</p>
          <p className="text-stone-200">© 2024 Kübra Corut</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
