import React, { useEffect, useState } from "react";
import video2 from "../Assets/ÖzAzem.mp4";
import axios from "axios";

const Banner2 = () => {
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
            "http://localhost:3030/api/createContext",
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
    <div className="text-center bg-stone-200">
      <div className="relative text-center h-[850px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video2}
          autoPlay
          loop
          muted
        ></video>

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        <div className="relative pt-80 z-10">
          <h2 className="text-8xl font-bold text-stone-200 animate-fade-in-up">
            GÜVENLİ İNŞAAT
          </h2>
          <p className="text-4xl mt-4 font-bold text-stone-200 animate-fade-in-up delay-150">
            Evinizi, Hayatınızı Güzelleştirmeye ve Değer Katmaya Devam Ediyor
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-20  font-[sans-serif]">
        <div>
          <h2 className="text-stone-600 text-3xl font-extrabold">
            İLETİŞİM FORMU
          </h2>
          <p className="text-sm text-stone-500 mt-4 leading-relaxed">
            Belirli bir sorunuz mu var veya yeni fırsatları mı keşfetmek
            istiyorsunuz? Deneyimli ekibimiz sizinle iletişime geçmeye hazır.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="fullname"
                placeholder="İsim"
                value={authData.fullname}
                onChange={handleChange}
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={authData.email}
                onChange={handleChange}
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <textarea
                name="message"
                placeholder="Mesaj"
                value={authData.message}
                onChange={handleChange}
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-stone-600 hover:bg-blue-700 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                />
              </svg>
              Formu Yolla
            </button>
          </form>
        </div>

        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://maps.google.com/maps?ll=40.59756420576757,43.09379&z=15&output=embed"
            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
