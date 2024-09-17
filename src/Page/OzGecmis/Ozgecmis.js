import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from "../../Assets/Projeler.jpg";
import './Ozgecmis.css'; 

const Ozgecmis = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/api/section/Ozgecmis");
        setContent(response.data.content);  
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchSectionData();
  }, []);

  return (
    <div className='bg-stone-200 mt-0'>
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-28">
        
        <div className="md:w-1/2 text-center md:text-left animate-fadeInUp">
          <h2 className="text-2xl text-stone-500 mb-4">Azem İnşaat</h2>
          <h3 className="text-4xl text-stone-700 mb-6">Kurumsal Özgeçmiş</h3>
          <p className="text-gray-500 mb-6 text-xm">
            {content} 
          </p>
          <button className="bg-gradient-to-r from-stone-700 to-stone-900 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-4 text-sm focus:ring-orange-300">
            Detaylar
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 animate-slideIn">
          <img 
            src={image}
            alt="İç Mekan Tasarımı" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Ozgecmis;
