import React, { useState, useEffect } from "react";

const Button = ({ text, onClick, className, style }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      className={`font-montserrat border border-blue-900 hover:border-amber-500 text-blue-900 text-xl font-bold py-2 px-4 mb-3 rounded-full sm:py-3 sm:px-7 ${className}`}
      onClick={onClick}
      style={{
        display: windowWidth >= 600 ? "block" : "none",
        width: windowWidth >= 600 ? "auto" : "100%",
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
