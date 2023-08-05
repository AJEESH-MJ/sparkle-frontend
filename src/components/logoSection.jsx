import React from 'react';
import { Slogo1, Slogo2, Slogo3, Slogo4, Slogo5, Slogo6, Slogo7, Slogo8, Slogo9, Slogo10, Slogo11, Slogo12, Slogo13, Slogo14, Slogo15, Slogo16, Slogo17 } from '../assets/index';

const LogoSection = () => {
  const logos = [
    Slogo1,
    Slogo2,
    Slogo3,
    Slogo4,
    Slogo5,
    Slogo6,
    Slogo7,
    Slogo8,
    Slogo9,
    Slogo10,
    Slogo11,
    Slogo12,
    Slogo13,
    Slogo14,
    Slogo15,
    Slogo16,
    Slogo17,
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-14" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;