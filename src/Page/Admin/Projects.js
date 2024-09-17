import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', image: '' });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/Admin-Login");
    }

    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3030/api/getProject", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(response.data);
      } catch (error) {
        console.error("Projects verileri çekilemedi:", error);
        navigate("/Admin-Login");
      }
    };

    fetchProjects();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedProject) {
        await axios.put(`http://localhost:3030/api/updateProject/${selectedProject._id}`, form);
      } else {
        await axios.post("http://localhost:3030/api/createProject", form);
      }
      setForm({ title: '', description: '', image: '' });
      setSelectedProject(null);
      const response = await axios.get("http://localhost:3030/api/getProject");
      setProjects(response.data);
    } catch (error) {
      console.error("Proje işlemi başarısız:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/api/deleteProject/${id}`);
      const response = await axios.get("http://localhost:3030/api/getProject");
      setProjects(response.data);
    } catch (error) {
      console.error("Proje silme başarısız:", error);
    }
  };

  return (
    <div className=" flex justify-center pt-20 bg-gray-200 pb-24">
      <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 text-center space-y-4">
        <h2 className="text-3xl font-bold mb-4">Admin Paneline Hoşgeldiniz</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Başlık"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Açıklama"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Görsel URL"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {selectedProject ? "Güncelle" : "Ekle"}
          </button>
        </form>
        <div className="overflow-auto mt-4">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">Başlık</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">Açıklama</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">Görsel</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">Eylemler</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id} className="hover:bg-gray-100">
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">{project.title}</td>
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">{project.description}</td>
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">{project.image}</td>
                  <td className="px-6 py-6 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setForm({ title: project.title, description: project.description, image: project.image });
                      }}
                      className="bg-stone-700 text-white py-2 px-3 rounded-lg hover:bg-stone-900 transition duration-300 mr-2 mb-2"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="bg-stone-700 text-white py-2 px-3 rounded-lg hover:bg-stone-900 transition duration-300"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            navigate("/Admin-Login");
          }}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Projects;
