import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo64.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-5 p-3 bg-black rounded-full">
      <a href="/" className="flex items-center">
        <img src={logo} alt="" />
        <img src="https://images.cooltext.com/5630645.png" alt="logo" />
      </a>
      <div className="text-lg">
        <Link
          to="/"
          type="button"
          className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Home
        </Link>
        <Link
          to="/blog"
          type="button"
          className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Blog
        </Link>
      </div>
      <div className="">
        <Link
          to="/login"
          className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
            Log IN
        </Link>
        <Link
          to="/registration"
          className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
            Registration
        </Link>
      </div>
    </div>
  );
};

export default Header;
