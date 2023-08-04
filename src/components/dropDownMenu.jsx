import React from "react";
import ContactDetails from "../components/contactDetails";
import NavLinks from "../components/navLinks";
import SocialIcons from "../components/socialIcons.jsx";

const DropdownMenu = ({ isOpen, handleMenuToggle }) => {
  return (
    <div
      className={`sm:hidden absolute top-28 right-0 bg-slate-100 p-4 w-full z-10 ${
        isOpen ? "block" : "hidden"
      }`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: isOpen ? "0" : "-100%",
        transition: "all 0.5s",
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Navigation Links */}
        <NavLinks />

        {/* Contact Details */}
        <ContactDetails isMenuOpen={isOpen} isSmallScreen={true} />

        {/* Social Icons */}
        <SocialIcons />
      </div>
    </div>
  );
};

export default DropdownMenu;