import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
import image from "../../Assets/image4.jpg";

const HakkimizdeNavbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/getSection"
        );
        setSections(response.data);
      } catch (error) {
        console.error("Veriler çekilirken bir hata oluştu: ", error);
      }
    };

    fetchSections();
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div>
      <div className="relative min-h-screen">
        <img
          src={image}
          alt="Main"
          className="w-full h-full object-cover opacity-95"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20">
          <div className="text-center">
          <h1 className="text-white text-8xl font-bold drop-shadow-lg mr-0 ml-4">
            HAKKIMIZDA
          </h1>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col md:flex-row bg-stone-200">
        <div className="md:w-3/5 p-12 shadow-lg flex flex-col justify-center">
          <h1 className="text-6xl font-handwriting text-stone-600 mb-12 text-center">
            Azem İnşaat Hakkında
          </h1>

          <div className="space-y-4 mt-12">
            {sections.map((section) => (
              <div key={section.section}>
                <button
                  onClick={() => toggleSection(section.section)}
                  className="w-full text-left px-4 py-3 shadow  font-semibold text-stone-200 bg-stone-500 transition duration-200 flex justify-between items-center hover:bg-zinc-800"
                >
                  {section.section.charAt(0).toUpperCase() +
                    section.section.slice(1)}
                  {activeSection === section.section ? (
                    <FaMinus className="ml-auto transition transform rotate-180" />
                  ) : (
                    <FaPlus className="ml-auto transition" />
                  )}
                </button>
                <div
                  className={`${
                    activeSection === section.section
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden transition-all duration-500 ease-in-out p-4 bg-stone-600 mt-2 text-sm  text-stone-200`}
                >
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center items-center bg-stone-200">
          <div className="relative p-4">
            <div className="absolute top-0 left-10 w-[480px] h-[300px] bg-stone-500 transform -translate-x-12 -translate-y-2 "></div>
            <div className="relative w-full overflow-hidden shadow-lg">
              <img
                src={image}
                alt="İç Mekan Tasarımı"
                className="w-[500px] h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HakkimizdeNavbar;
