import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactDetails = ({ isMenuOpen, isSmallScreen, isFooter }) => {
  const [isScreenBelow887, setIsScreenBelow887] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenBelow887(window.innerWidth <= 887);
    };

    handleResize(); // Set initial value on component mount

    window.addEventListener('resize', handleResize); // Update value on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);

  if (isFooter) {
    return (
      <div className="flex flex-col text-white">
      <div className="flex items-center space-x-4 ml-0 mt-2 md:ml-20">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-4"/>
          <span className="text-left">Al muntazahat, 22351 Jeddah,<br /> Kingdom of Saudi Arabia</span>
        </div>
        <div className="flex items-center space-x-4 ml-0 md:ml-20 mb-6 mt-4">
          <FontAwesomeIcon icon={faPhone} />
          <span>+966 56 272 6600</span>
        </div>
        <div className="flex items-center space-x-4 ml-0 md:ml-20">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>sales@sparkle-adv.com</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`hidden sm:flex items-center text-blue-900 ${isMenuOpen ? 'hidden' : ''}`}>
      {!isScreenBelow887 && (
        <div className="flex flex-col justify-start">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="rounded-full border-yellow-500 border p-1 mr-2 w-5 h-5" />
            <span>+966 56 272 6600</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="rounded-full border-yellow-500 border p-1 mr-2 w-5 h-5" />
            <span>sales@sparkle-adv.com</span>
          </div>
        </div>
      )}
      {!isScreenBelow887 && (
        <div className="flex items-start space-x-4 ml-8 mb-6">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="rounded-full border-yellow-500 border p-1 mb-5 w-5 h-5" />
          <span className="text-left">Al muntazahat, 22351 Jeddah<br />Kingdom of Saudi Arabia</span>
        </div>
      )}
      {isScreenBelow887 && (
        <div className="flex items-center justify-start space-x-4">
          <FontAwesomeIcon icon={faPhone} className="rounded-full border-yellow-500 border p-1 w-5 h-5" />
          <span>+966 56 272 6600</span>
          <FontAwesomeIcon icon={faEnvelope} className="rounded-full border-yellow-500 border p-1 w-5 h-5" />
          <span>sales@sparkle-adv.com</span>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="rounded-full border-yellow-500 border p-1 w-5 h-5" />
          <span className="text-left">Al muntazahat, 22351 Jeddah, Kingdom of Saudi Arabia</span>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
