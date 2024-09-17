import React from "react";
import img from "../../Assets/Azem.png";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavbarMiddle = () => {
  
  return (
    <div className="bg-stone-700 w-full h-[100px] flex items-center justify-center space-x-10 font-thin">

      <div className="flex items-center pt-6">
        <Link to="/"> 
        <img src={img} alt="Açıklama" className="h-[160px] w-[220px] pb-4" />
        </Link>
      </div>

      <div className="flex items-center space-x-44">
        <div className="flex items-center text-stone-200 space-x-2">
          <FaClock className="text-xl" />
          <div>
            <p className="text-sm font-semibold">Pzt - Cuma: 09:00 - 17:00</p>
            <p className="text-sm">Pazar Kapalı</p>
          </div>
        </div>

        <div className="flex items-center text-stone-200 space-x-2">
          <FaMapMarkerAlt className="text-xl" />
          <div>
            <p className="text-sm font-semibold">Cumhuriyet, Şehit Er Hayrettin Balk Sokak No.4</p>
            <p className="text-sm">Merkez/Kars</p>
          </div>
        </div>

        <div className="flex items-center text-stone-200 space-x-2">
          <FaPhone className="text-xl" />
          <div>
            <p className="text-sm font-semibold">0 (474) 502 23 23</p>
            <p className="text-sm">azem.36yapi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
