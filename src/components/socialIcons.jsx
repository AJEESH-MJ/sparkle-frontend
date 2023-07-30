import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = ({ isFooter }) => {
  return (
    <div className={`flex items-center space-x-4 mb-4 ${isFooter ? 'flex items-center justify-center' : ''}`}>
      <Link
        to="#"
        className={`flex items-center justify-center w-8 h-8 border rounded-full ${isFooter ? 'text-white border-white' : 'text-blue-900 border-blue-900'} hover:border-amber-500`}
      >
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link
        to="#"
        className={`flex items-center justify-center w-8 h-8 border rounded-full ${isFooter ? 'text-white border-white' : 'text-blue-900 border-blue-900'}  hover:border-amber-500`}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link
        to="#"
        className={`flex items-center justify-center w-8 h-8 border rounded-full ${isFooter ? 'text-white border-white' : 'text-blue-900 border-blue-900'}  hover:border-amber-500`}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link
        to="#"
        className={`flex items-center justify-center w-8 h-8 border rounded-full ${isFooter ? 'text-white border-white' : 'text-blue-900 border-blue-900'}  hover:border-amber-500`}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
};

export default SocialIcons;
