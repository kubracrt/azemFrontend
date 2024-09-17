import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckSquare, FaTrophy, FaUsers } from "react-icons/fa";
import image3 from "../Assets/keys.png";


const Banner3 = () => {


  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get("http://localhost:3030/api/getBanner");
        setBanner(response.data);
      } catch (error) {
        console.error("Banner verileri çekilemedi:", error);
      }
    };
    fetchBanner();
  }, []);

  return (
    <div
      className="flex justify-around items-center h-[300px]"
      style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.8,
      }}
    >
      <div className="flex flex-col items-center text-stone-200">
        <FaCheckSquare className="text-4xl mb-2" />
        <h2 className="text-4xl font-bold">{banner.TamamlananProje}</h2>
        <p className="text-lg">Tamamlanan Proje</p>
      </div>

      <div className="flex flex-col items-center text-stone-200">
        <FaTrophy className="text-4xl mb-2" />
        <h2 className="text-4xl font-bold">{banner.TecrübeYili}</h2>
        <p className="text-lg">Yıllık Tecrübe</p>
      </div>

      <div className="flex flex-col items-center text-stone-200">
        <FaUsers className="text-4xl mb-2" />
        <h2 className="text-4xl font-bold">{banner.Müsteri}</h2>
        <p className="text-lg">Müşteri</p>
      </div>
    </div>
  );
};

export default Banner3;
