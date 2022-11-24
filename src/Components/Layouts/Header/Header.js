import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo64.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-16 m-5">
      <div className="flex items-center border-2 border-red-600">
        <img src={logo} alt="" />
        <h1>Apnader laptop</h1>
      </div>
      <div className="border-2 border-green-400">
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
      </div>
      <div className="border-2 border-blue-600">
        <Link to='/login'>Log IN</Link>
        <Link to='/registration'>Registration</Link>
      </div>
    </div>
  );
};

export default Header;
