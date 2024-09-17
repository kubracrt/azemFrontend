import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/Azem.png";
import "./Giris.css";

const Start = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`container ${
        isLoaded ? "fade-in" : "fade-out"
      } flex  items-center justify-center pb-40`}
    >
      <img src={image} alt="Azem Logo" className="w-80 h-80 object-contain" />

      <span className="text1 text-center text-4xl font-bold ">AZEM İNŞAAT</span>
    </div>
  );
};

export default Start;
