import React, { useEffect, useState } from "react";
import image from "../../Assets/image8.jpg";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import axios from "axios";

const Iletisim = () => {
  const [authData, setAuthData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const submitForm = async () => {
      if (isSubmitted) {
        try {
          const response = await axios.post(
            "http://localhost:3030/api//createContext",
            authData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 201) {
            alert("Form başarıyla gönderildi!");
            setAuthData({ fullname: "", email: "", message: "" });
          } else {
            alert("Form gönderimi başarısız oldu: " + response.status);
          }
        } catch (error) {
          console.error("Form gönderimi sırasında hata oluştu: ", error);
          alert("Form gönderimi sırasında bir hata oluştu: " + error.message);
        }

        setIsSubmitted(false);
      }
    };

    submitForm();
  }, [isSubmitted, authData]);

  return (
    <div className="relative min-h-screen bg-stone-200">
      <div className="relative min-h-screen">
        <img
          src={image}
          alt="Main"
          className="w-full h-full object-cover opacity-95"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20">
          <h1 className="text-white text-8xl font-bold drop-shadow-lg mr-0 ml-4">
            İLETİŞİM
          </h1>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-md w-full h-[400px]">
        <iframe
          src="https://maps.google.com/maps?ll=40.59756420576757,43.09379&z=15&output=embed"
          className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative h-96 ">
        <div className="bg-white shadow-lg p-8 max-w-3xl mx-auto mt-10 mr-28  ">
          <h1 className="text-2xl font-bold text-center mb-6 text-stone-700 ">
            Bizimle iletişime geçin
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 text-sm font-bold mb-2">
                  İsminiz
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={authData.fullname}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="İsminizi Giriniz"
                />
              </div>
              <div>
                <label className="block text-stone-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={authData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email adresinizi Giriniz"
                />
              </div>
            </div>
            <div className="mb-6 mt-4">
              <label className="block text-stone-700 text-sm font-bold mb-2">
                Mesaj
              </label>
              <textarea
                name="message"
                value={authData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Mesajınızı Giriniz"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-zinc-580 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
        <div className="absolute top-[-150px] left-56 p-6 bg-zinc-800  w-[300px] h-[500px] font-mono">
          <h3 className="text-xl font-bold text-stone-200 pt-8 text-center">
            AZEM YAPI
          </h3>
          <p className="text-m text-stone-200 pt-10 text-center">
            <FaMapMarkerAlt className="inline mr-2" />
            Cumhuriyet, Şehit Er Hayrettin Balk Sokak No.4, 36000 Kars
            Merkez/Kars
          </p>
          <p className="text-m text-stone-200 mb-4 text-center pt-10">
            <FaPhone className="inline mr-2" />
            <a href="tel:+5321753421" className="text-stone-200 font-semibold">
              +532 175 34 21
            </a>
          </p>
          <p className="text-m text-stone-200 mb-4 text-center ">
            <FaPhone className="inline mr-2" />
            <a href="tel:+5330287092" className="text-stone-200 font-semibold">
              +533 028 70 92
            </a>
          </p>
          <p className="text-m text-stone-200 mb-4 text-center pt-10">
            E-Posta:{" "}
            <a
              href="mailto:azem.36yapi@gmail.com"
              className="text-stone-200 font-semibold"
            >
              azem.36yapi@gmail.com
            </a>
          </p>
          <div className="flex items-center space-x-8 z-20 pt-10 text-center px-10">
            <a
              href="https://www.instagram.com/azemgroup_?igsh=MWNkYmN3aXhiOGhuNg%3D%3D&utm_source=qr"
              className="text-stone-200 social-icon"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.youtube.com/@azemgroup36"
              className="text-stone-200 social-icon"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/share/h4sZSzCCcaeXtkKS/?mibextid=LQQJ4d"
              className="text-stone-200 social-icon"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://x.com/azemgroup_?s=21"
              className="text-stone-200 social-icon"
            >
              <TiSocialTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
