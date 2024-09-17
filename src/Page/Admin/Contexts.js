import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contexts = () => {
  const navigate = useNavigate();
  const [contexts, setContexts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/Admin-Login");
    }

    const fetchContexts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/getContext",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setContexts(response.data);
      } catch (error) {
        console.error("Context verileri çekilemedi:", error);
        navigate("/Admin-Login");
      }
    };

    fetchContexts();
  }, [navigate]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/api/deleteContext/${id}`);
      const response = await axios.get("http://localhost:3030/api/getContext");
      setContexts(response.data);
    } catch (error) {
      console.error("Proje silme başarısız:", error);
    }
  };
  return (
    <div className="min-h-screen flex justify-center pt-20 bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold mb-4">Admin Paneline Hoşgeldiniz</h2>
        <div className="overflow-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  İsim
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  E-posta
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                  Mesaj
                </th>
              </tr>
            </thead>
            <tbody>
              {contexts.map((context) => (
                <tr key={context._id} className="hover:bg-gray-100">
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {context.fullname.trim()}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {context.email.trim()}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {context.message.trim()}
                    <button
                      onClick={() => handleDelete(context._id)}
                      className="bg-stone-700 text-white py-2 px-6 ml-8 rounded-lg hover:bg-stone-900 transition duration-300"
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

export default Contexts;
