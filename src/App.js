import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Footer from "./Page/Footer/Footer";
import HakkimizdaNavbar from "./Page/Hakkimizda/HakkimizdeNavbar";
import Projeler from "./Page/Projeler/Projeler";
import İletisim from "./Page/İletisim/İletisim";
import Start from "./Page/Start/Start";
import AdminLogin from "./Page/Admin/AdminLogin";
import Contexts from "./Page/Admin/Contexts";
import Yönlendirme from "./Page/Admin/Yönlendirme";
import Projects from "./Page/Admin/Projects";
import Section from "./Page/Admin/Section.js";
import BannerAdmin from "./Page/Admin/BannerAdmin.js";



function App() {
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowStart(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showStart ? (
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      ) : (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hakkimizda" element={<HakkimizdaNavbar />} />
            <Route path="/Projeler" element={<Projeler />} />
            <Route path="/İletisim" element={<İletisim />} />
            <Route path="/Admin-Login" element={<AdminLogin />} />
            <Route path="/Admin-Router" element={<Yönlendirme />} />
            <Route path="/Admin-Section" element={<Section />} />
            <Route path="/Admin-Contexts" element={<Contexts />} />
            <Route path="/Admin-Projects" element={<Projects />} />
            <Route path="/Admin-Banner" element={<BannerAdmin />} />

          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
