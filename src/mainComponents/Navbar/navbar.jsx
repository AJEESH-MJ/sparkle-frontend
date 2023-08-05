// Navbar.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { logo } from "../../assets/index";
import ContactDetails from "../../components/contactDetails";
import DropdownMenu from "../../components/dropDownMenu";
import NavLinks from "../../components/navLinks";
import Button from "../../components/button";
import SocialIcons from "../../components/socialIcons.jsx";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 887);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container m-auto w-full flex flex-col justify-center">
        <nav className="flex items-center justify-between bg-[#FFFFFF] p-4 z-20">
          {/* Logo */}
          <div className="">
            <img src={logo} alt="logo" className="w-auto h-16 md:h-12" />
          </div>

          {/* Contact Details */}
          <ContactDetails
            isMenuOpen={isMenuOpen}
            isSmallScreen={isSmallScreen}
          />

          {/* Button */}
          <Button
            text="REQUEST A QUOTE"
            onClick={() => {
              // Handle button click
            }}
            className={isSmallScreen ? "ml-auto" : ""}
          />
          {/* Dropdown Menu Button */}
          {isSmallScreen && (
            <div className="">
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="text-blue-900 text-3xl cursor-pointer mr-5 mb-2 ml-10"
                onClick={handleMenuToggle}
              />
            </div>
          )}

          {/* Dropdown Menu */}
          {isSmallScreen && (
            <DropdownMenu
              isOpen={isMenuOpen}
              handleMenuToggle={handleMenuToggle}
            />
          )}
        </nav>

        {/* Bottom Section: Navigation Links, Social Media Icons */}
        {!isSmallScreen && (
          <div className="flex items-center justify-around space-x-4">
            {/* Navigation Links */}
            <NavLinks />

            {/* Social Media Icons */}
            <SocialIcons />
          </div>
        )}
      </div>
  );
};

export default Navbar;
