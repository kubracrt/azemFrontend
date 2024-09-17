import React, { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import NavbarMenu from "./NavbarMenu";
import NavbarMiddle from "./NavbarMiddle";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full z-40 relative navbar-sticky ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="flex justify-between items-center px-10 h-10 bg-zinc-900 animate-slide-in-top">
        <div className="flex items-center space-x-3 z-20">
          <BsFillTelephoneFill className="text-stone-200 text-lg" />
          <p className="text-xs pr-14 text-stone-200 font-semibold contact-info">
            +532 175 34 21 <br /> +533 028 70 92
          </p>
          <IoMail className="text-stone-200 text-lg" />
          <p className="text-xs text-stone-200 font-semibold contact-info">
            azem.36yapi@gmail.com
          </p>
        </div>
        <div className="flex items-center space-x-8 z-20">
          <a href="https://www.instagram.com/azemgroup_?igsh=MWNkYmN3aXhiOGhuNg%3D%3D&utm_source=qr" className="text-stone-200 social-icon">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://www.youtube.com/@azemgroup36" className="text-stone-200 social-icon">
            <FaYoutube className="text-xl" />
          </a>
          <a href="https://www.facebook.com/share/h4sZSzCCcaeXtkKS/?mibextid=LQQJ4d" className="text-stone-200 social-icon">
            <FaFacebook className="text-xl" />
          </a>
          <a href="https://x.com/azemgroup_?s=21" className="text-stone-200 social-icon">
            <TiSocialTwitter className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="animate-slide-in-middle">
        <NavbarMiddle />
      </div>

      <div className="animate-slide-in-bottom">
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
