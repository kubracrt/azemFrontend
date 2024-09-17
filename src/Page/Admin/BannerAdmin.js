import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BannerAdmin = () => {
  const navigate = useNavigate();
  const [banner, setBanner] = useState(null); // Başlangıçta banner'ı null olarak başlatıyoruz
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/Admin-Login");
    }

    const fetchBanner = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/getBanner",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBanner(response.data); // Tek bir veri objesi olarak ayarlanıyor
      } catch (error) {
        console.error("Banner verileri çekilemedi:", error);
        navigate("/Admin-Login");
      }
    };

    fetchBanner();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedBanner) {
        await axios.put(
          `http://localhost:3030/api/updateBanner/${selectedBanner._id}`,
          {
            TamamlananProje: form.TamamlananProje,
            TecrübeYili: form.TecrübeYili,
            Müsteri: form.Müsteri,
          }
        );
      } else {
        await axios.post("http://localhost:3030/api/createBanner", {
          TamamlananProje: form.TamamlananProje,
          TecrübeYili: form.TecrübeYili,
          Müsteri: form.Müsteri,
        });
      }
      setForm({ TamamlananProje: "", TecrübeYili: "", Müsteri: "" });
      setSelectedBanner(null);
      const response = await axios.get("http://localhost:3030/api/getBanner");
      setBanner(response.data);
    } catch (error) {
      console.error("Banner işlemi başarısız:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/api/deleteBanner/${id}`);
      const response = await axios.get("http://localhost:3030/api/getBanner");
      setBanner(response.data);
    } catch (error) {
      console.error("Banner silme başarısız:", error);
    }
  };

  return (
    <div className=" flex justify-center pt-20 bg-gray-200 pb-24">
      <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 text-center space-y-4">
        <h2 className="text-3xl font-bold mb-4">Admin Paneline Hoşgeldiniz</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="TamamlananProje" // 'title' yerine 'TamamlananProje' olarak değiştirdim
            value={form.TamamlananProje}
            onChange={handleChange}
            placeholder="Tamamlanan Proje"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="TecrübeYili" // 'description' yerine 'TecrübeYili'
            value={form.TecrübeYili}
            onChange={handleChange}
            placeholder="Tecrübe Yılı"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="Müsteri" 
            value={form.Müsteri}
            onChange={handleChange}
            placeholder="Müsteri"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {selectedBanner ? "Güncelle" : "Ekle"}
          </button>
        </form>

        {banner && (
          <div className="overflow-auto mt-4">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                    Tamamlanan Proje
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                    Tecrübe Yılı
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                    Müşteri
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                    Eylemler
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {banner.TamamlananProje}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {banner.TecrübeYili}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 bg-white text-sm">
                    {banner.Müsteri}
                  </td>
                  <td className="px-6 py-6 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => {
                        setSelectedBanner(banner);
                        setForm({
                          TamamlananProje: banner.TamamlananProje,
                          TecrübeYili: banner.TecrübeYili,
                          Müsteri: banner.Müsteri,
                        });
                      }}
                      className="bg-stone-700 text-white py-2 px-3 rounded-lg hover:bg-stone-900 transition duration-300 mr-2 mb-2"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(banner._id)}
                      className="bg-stone-700 text-white py-2 px-3 rounded-lg hover:bg-stone-900 transition duration-300"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
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

export default BannerAdmin;
