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
    <div className="bg-gray-100 py-10 h-[400px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center ">
              <img src={logo} alt={`Logo ${index + 1}`} className="h-14" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
