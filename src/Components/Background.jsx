import React from 'react';
import './Background.css'; // Import the new CSS

const Background = () => {
  return (
    <div className="animated-background">
      {/* Star layers for a parallax effect */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* The glowing aura representing the Virat Swaroop */}
      <div className="virat-swaroop-aura"></div>
      
      {/* Arjuna's silhouette */}
      <div className="arjuna-silhouette">
        {/* This is an inline SVG to create the silhouette without needing an image file */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#000000" 
            d="M100,10 C110,10 115,20 115,25 C125,20 135,30 130,40 C140,45 140,60 130,65 L130,110 C130,120 120,125 110,125 L90,125 C80,125 70,120 70,110 L70,65 C60,60 60,45 70,40 C65,30 75,20 85,25 C85,20 90,10 100,10 M90,130 L110,130 L110,150 C110,160 120,170 130,170 L140,170 L140,190 L60,190 L60,170 L70,170 C80,170 90,160 90,150 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Background;