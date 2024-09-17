import React from 'react'
import { Link } from "react-router-dom";

const Yönlendirme = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-semibold mb-12">Yönetim Sayfaları</h1>
      <div className=" space-x-3">
        <Link to="/Admin-Contexts" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Formlar İçin
        </Link>
        <Link to="/Admin-Projects" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
          Projeler İçin
        </Link>
        <Link to="/Admin-Section" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-green-700">
          Seçenekler İçin
        </Link>
        <Link to="/Admin-Banner" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-stone-600 hover:bg-green-700">
          Banner İçin
        </Link>
      </div>
    </div>
  )
}

export default Yönlendirme;
