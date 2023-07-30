import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const RequestQuote = () => {
  return (
    <div className="flex flex-col text-left md:ml-0 lg:ml-10 lg:w-72">
      <h3 className="text-lg font-bold mb-2">Request a Quote</h3>
      <p className="mb-4">
        Sign up for our newsletter to receive the latest news, special offers,
        events, and discounts.
      </p>

      <div className="flex items-center">
      <input
        type="text"
        className="rounded-full px-4 py-2 md:px-4 text-base md:text-xl text-blue-900 focus:outline-none placeholder-red-600 font-semibold w-72 sm:w-64"
        placeholder="E-mail"
      />
      <Link
        to={``}
        className="z-20 text-white text-xl bg-amber-500 rounded-full py-[10px] px-6 sm:py-3 -ml-10 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
    </div>
    </div>
  );
};

export default RequestQuote;
