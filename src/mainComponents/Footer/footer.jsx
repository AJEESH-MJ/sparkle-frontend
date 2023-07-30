import React from "react";
import ContactDetails from "../../components/contactDetails";
import NavLinks from "../../components/navLinks";
import SocialIcons from "../../components/socialIcons";
import { Flogo } from "../../assets/index";
import RequestQuote from "../../components/requestQuote";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-8">
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-start md:items-center">
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-lg font-bold text-left mt-5 mb-3">
                About Us
              </h3>
              <p className="text-left lg:max-w-lg">
                Sparkle is an innovative advertisement and print concept
                development company. We create unique design concepts for Small
                Medium Enterprises & corporates, specializing in ad design,
                print media production, exhibit production, and interactive
                services.
              </p>
            </div>
            <div className="w-full md:w-[20rem]">
              <h3 className="text-lg text-left font-bold mt-0 md:mb-0 w-52 md:w-auto md:ml-20">
                Contact Information
              </h3>
              <ContactDetails isFooter={true} />
            </div>
            <div className="w-full md:w-[20rem]">
              <RequestQuote />
            </div>
          </div>
          <div className="my-8 flex flex-col md:flex-row md:justify-between">
            <NavLinks isFooter={true} />
            <SocialIcons isFooter={true} />
          </div>
          <hr className="my-8" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <img src={Flogo} alt="Logo" className="w-auto h-12" />
            </div>
            <div className="text-lg">
              &copy; {new Date().getFullYear()} Sparkle Advertising Inc. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
