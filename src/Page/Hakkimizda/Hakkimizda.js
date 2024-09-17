import React from "react";
import image from "../../Assets/image.jpg";

const Ozgecmis = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-8 py-28 bg-stone-200">
      <div className="md:w-1/2 text-center md:text-left px-8  bg-stone-200 py-28">
        <h2 className="text-2xl  text-stone-500 mb-4">Azem İnşaat Hakkında</h2>
        <h3 className="text-4xl text-stone-700  mb-6">Kurumsal Değelerimiz</h3>
        <p className="text-gray-500 mb-6 text-xm">
          Azem İnşaat olarak, 1989 yılında içerisinde bulunduğumuz inşaat
          sektöründe başarılı projelerimizden aldığımız güç "Geçmişten gelen
          güven" sloganımızla hayallerinizi gerçekleştirmeye devam ediyoruz.
          Azem İnşaat, faaliyet gösterdiği inşaat sektöründe sadece Ankara'nın
          değil, tüm Türkiye'nin yapısal güçleri arasında yer alıyor.
        </p>
        <p className=" text-stone-600 ">--------- Devamını oku</p>
      </div>
    </div>
  );
};

export default Ozgecmis;
