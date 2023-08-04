import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ isFooter }) => {
  return (
    <div className={`font-roboto font-semibold flex items-center justify-center space-x-8 text-lg mb-4 ${isFooter ? 'text-white flex flex-row' : 'text-blue-900'}`}>
      {/* Add a conditional rendering */}
      {window.innerWidth <= 887 ? (
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="hover:text-amber-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-500">
            About Us
          </Link>
          <Link to="/team" className="hover:text-amber-500">
            Our Team
          </Link>
          <Link to="/services" className="hover:text-amber-500">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-amber-500">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-amber-500">
            Contact
          </Link>
        </div>
      ) : (
        // Render links in a row layout for larger screen sizes
        <>
          <Link to="/" className="hover:text-amber-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-500">
            About Us
          </Link>
          <Link to="/team" className="hover:text-amber-500">
            Our Team
          </Link>
          <Link to="/services" className="hover:text-amber-500">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-amber-500">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-amber-500">
            Contact
          </Link>
        </>
      )}
    </div>
  );
};

export default NavLinks;
