import React, { useState } from "react";
import backgroundImage2 from '../../Assets/Main2.jpg';
import backgroundImage1 from '../../Assets/MainAzem.jpg';

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [backgroundImage1, backgroundImage2];

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div style={{ position: 'relative', height: "900px" }}>
      <img 
        src={images[currentImage]} 
        alt="slider" 
        style={{ 
          width: '100%', 
          height: '100%', 
        }} 
      />
  
      <div 
        style={{ 
          position: 'absolute', 
          top: '40%', 
          left: '20px', 
          transform: 'translateY(-50%)', 
          fontSize: '20px', 
          cursor: 'pointer',
          color: 'white',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '10px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease', 
        }} 
        onClick={handlePrev}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        &#8592;
      </div>
    
      <div 
        style={{ 
          position: 'absolute', 
          top: '40%', 
          right: '20px', 
          transform: 'translateY(-50%)', 
          fontSize: '20px', 
          cursor: 'pointer',
          color: 'white',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '10px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
          transition: 'transform 0.3s ease', 
        }} 
        onClick={handleNext}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        &#8594;
      </div>
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 2 
      }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              height: '10px',
              width: '10px',
              margin: '0 10px',
              backgroundColor: currentImage === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
