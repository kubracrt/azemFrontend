import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../../Assets/image3.jpg";

const Projeler = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3030/api/getProject");
        setProjects(response.data);
      } catch (error) {
        console.error("Proje verileri çekilemedi:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <div className="relative min-h-screen">
        <img
          src={image}
          alt="Main"
          className="w-full h-full object-cover opacity-95"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20">
        <h1 className="text-white text-8xl font-bold drop-shadow-lg mr-0 ml-4">
            PROJELER
          </h1>
        </div>
      </div>
      <div className="w-full p-5 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-lg p-6 flex transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ minHeight: "300px" }} 
          >
           
            <img
              src={project.image}
              alt="Proje Resmi"
              className="w-2/4 h-full rounded-md object-cover"
            />
            <div className="flex flex-col justify-start ml-6 w-full overflow-hidden">
              <h3 className="text-xl font-bold mb-4 text-center">{project.title}</h3>
              <p className="text-sm text-gray-700 text-center leading-relaxed break-words overflow-y-auto">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projeler;
