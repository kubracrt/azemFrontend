import React from 'react'
import { Link } from "react-router-dom";
import "./NavbarMenu.css"


const NavbarMenu = () => {
  return (
    <div className="flex justify-center items-center text-center text-lg space-x-20 text-stone-200  bg-zinc-900 h-10 font-thin ">
    <Link to="/" className="hover:text-gray-200 text">Anasayfa</Link>
    <Link to="/Hakkimizda" className="hover:text-gray-200 text ">Hakkımızda</Link>
    <Link to="/Projeler" className="hover:text-gray-200 text">Projeler</Link>
    <Link to="/İletisim" className="hover:text-gray-200 text">İletişim</Link>

  </div>
  
  )
}

export default NavbarMenu