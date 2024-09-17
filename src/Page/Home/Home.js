import React from "react";
import Ozgecmis from "../OzGecmis/Ozgecmis";
import Ozellikler from "../Ozellikler/Ozellikler";
import Banner2 from "../../Banners/Banner2";
import Banner3 from "../../Banners/Banner3";
import Slider from "../Slider/Slider";
import Projelerimiz from "../../Assets/Projelerimiz.png";
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref: refOzgecmis, inView: inViewOzgecmis } = useInView({ threshold: 0.5 });
  const { ref: refOzellikler, inView: inViewOzellikler } = useInView({ threshold: 0.2 });
  const { ref: refBanner2, inView: inViewBanner2 } = useInView({ threshold: 0.2 });
  const { ref: refBanner3, inView: inViewBanner3 } = useInView({ threshold: 0.5 });

  return (
    <div>
      <Slider />
      <div ref={refOzgecmis} className={`transition-opacity duration-1000 ${inViewOzgecmis ? 'opacity-100' : 'opacity-0'}`}>
        <Ozgecmis />
      </div>
      <div ref={refBanner3} className={`transition-opacity duration-1000 ${inViewBanner3 ? 'opacity-100' : 'opacity-0'}`}>
        <Banner2 />
      </div>
      <div ref={refOzellikler} className={`transition-opacity duration-1000 ${inViewOzellikler ? 'opacity-100' : 'opacity-0'}`}>
        <Ozellikler />
      </div>
      <div ref={refBanner2} className={`transition-opacity duration-1000 ${inViewBanner2 ? 'opacity-100' : 'opacity-0'}`}>
        <Banner3 />
      </div>
      <div className="relative pt-16 bg-stone-200">
        <img src={Projelerimiz} className="w-full h-auto border-none" alt="Projelerimiz" />
      </div>
    </div>
  );
};

export default Home;
