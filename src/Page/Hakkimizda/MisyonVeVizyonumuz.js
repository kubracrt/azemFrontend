import React from 'react';
import image from "../../Assets/kusBakısı.jpg";

const Ozgecmis = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center  bg-stone-200 px-8 py-28">  
      <div className="md:w-1/2 text-center md:text-left ml-20 pt-20">
        <h2 className="text-2xl  text-stone-500 mb-4">Azem İnşaat Hakkında</h2>
        <h3 className="text-4xl text-stone-700  mb-6">Misyon ve Vizyonumuz</h3>
        <p className="text-gray-500 mb-6 text-xm">
          Azem İnşaat olarak, 1989 yılında içerisinde bulunduğumuz inşaat sektöründe başarılı projelerimizden aldığımız güç "Geçmişten gelen güven" sloganımızla hayallerinizi gerçekleştirmeye devam ediyoruz. Azem İnşaat, faaliyet gösterdiği inşaat sektöründe sadece Ankara'nın değil, tüm Türkiye'nin yapısal güçleri arasında yer alıyor.
        </p>
        <p className=" text-stone-600 ">
          --------- Devamını oku
        </p>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 pt-10">
        <img 
          src={image}
          alt="İç Mekan Tasarımı" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      

      
    </div>
  );
};

export default Ozgecmis;
