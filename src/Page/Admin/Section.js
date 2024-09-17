import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [form, setForm] = useState({ section: "", content: "" });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/Admin-Login");
    }

    const fetchSections = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/getSection",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSections(response.data);
      } catch (error) {
        console.error("Sections verileri çekilemedi:", error);
        navigate("/Admin-Login");
      }
    };

    fetchSections();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedSection) {
        await axios.put(
          `http://localhost:3030/api/updateSection/${selectedSection._id}`,
          form
        );
      } else {
        await axios.post("http://localhost:3030/api/postSection", form);
      }
      setForm({ section: "", content: "" });
      setSelectedSection(null);
      const response = await axios.get("http://localhost:3030/api/getSection");
      setSections(response.data);
    } catch (error) {
      console.error("Section işlemi başarısız:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/api/deleteSection/${id}`);
      const response = await axios.get("http://localhost:3030/api/getSection");
      setSections(response.data);
    } catch (error) {
      console.error("Section silme başarısız:", error);
    }
  };

  return (
    <div className="flex justify-center pt-20 bg-gray-200 pb-24">
      <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 text-center space-y-4">
        <h2 className="text-3xl font-bold mb-4">Admin Paneline Hoşgeldiniz</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="section"
            value={form.section}
            onChange={handleChange}
            placeholder="Başlık"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Açıklama"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {selectedSection ? "Güncelle" : "Ekle"}
          </button>
        </form>
        <div className="overflow-auto mt-4">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Başlık
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Açıklama
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Eylemler
                </th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <tr key={section._id} className="hover:bg-gray-100">
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {section.section}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {section.content}
                  </td>
                  <td className="px-6 py-6 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => {
                        setSelectedSection(section);
                        setForm({
                          section: section.section,
                          content: section.content,
                        });
                      }}
                      className="bg-stone-700 text-white py-2 px-3 rounded-lg hover:bg-stone-900 transition duration-300 mr-2 mb-2"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(section._id)}
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

export default Section;
