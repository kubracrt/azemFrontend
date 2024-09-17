import React from "react";
import image1 from "../../Assets/image7.jpg";
import image2 from "../../Assets/Azem.png";
import image3 from "../../Assets/image6.jpg";

import "./Ozellikler.css";

const Ozellikler = () => {
  const features = [
    {
      id: 1,
      title: "Güvenilir Hizmet",
      description:
        "Azem İnşaat olarak, 1989 yılından bu yana 'Geçmişten gelen güven' sloganımızla hayallerinizi gerçekleştirmeye devam ediyoruz.",
      image: image1,
    },
    {
      id: 2,
      title: "Yenilikçi Yapılar",
      description:
        "Yaptığımız tüm inşaat projelerimizde kaliteli malzeme, profesyonel işçiliğimizle başarıya ulaşıyoruz.",
      image: image2,
    },
    {
      id: 3,
      title: "Modern Tasarım",
      description:
        "Bugüne kadar yaptığımız tüm projelerimiz bölgedeki en iyi prime, kazanca ve beğeniye sahip olmuştur.",
      image: image3,
    },
  ];

  return (
    <div className="bg-stone-200 px-8 py-28">
      <div className="text-center mb-12">
        <h2 className="text-8xl font-semibold font-handwriting text-yellow-500">
          Azem İnşaat
        </h2>
        <h3 className="text-4xl font-bold text-stone-600 pt-10">
          Sizin için düşünüyor, sizin için değer yaratıyoruz.
        </h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="feature-card relative w-full h-96 shadow-lg overflow-hidden"
          >
            <div className="feature-card-inner">
              <div className="feature-card-front ">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full bg-black object-cover opacity-90 "
                />
                <h4 className="absolute py-0 text-white font-bold bg-black bg-opacity-50 px-4 w-full">
                  {feature.title}
                </h4>
              </div>
              <div className="feature-card-back">
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ozellikler;
