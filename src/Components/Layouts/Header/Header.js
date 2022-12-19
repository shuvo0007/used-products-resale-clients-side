import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo64.png";
import { FaRegUser } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:flex md:justify-between md:items-center my-5 p-3 bg-black md:rounded-full rounded-lg">
      <a href="/" className="md:flex md:items-center">
        <img className="w-0 md:w-16" src={logo} alt="" />
        <img src="https://images.cooltext.com/5630645.png" alt="logo" />
      </a>
      <div className="text-lg md:p-0 p-3">
        <Link
          to="/"
          type="button"
          className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-5 dark:focus:ring-yellow-900 "
        >
          Home
        </Link>
        <Link
          to="/blog"
          type="button"
          className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center dark:focus:ring-yellow-900"
        >
          Blog
        </Link>
      </div>
      {user ? (
        <div className="md:flex items-center ">
          <div className="md:mr-5">
            {user.photoURL == "admin" ? (
              <>
                <Link className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2  dark:focus:ring-yellow-900">
                  All Sellers
                </Link>
                <Link className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 dark:focus:ring-yellow-900">
                  All Buyers
                </Link>
              </>
            ) : (
              <>
                {user.photoURL == "seller" ? (
                  <div className="md:mt-0 mt-2">
                    <Link
                      to="/private/addProduct"
                      className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-5 dark:focus:ring-yellow-900"
                    >
                      Add A product
                    </Link>
                    <Link
                      to="/private/myProducts"
                      className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center dark:focus:ring-yellow-900"
                    >
                      My Products
                    </Link>
                  </div>
                ) : (
                  <div className="md:mt-0 mt-5">
                    <Link
                      to="/private/myOrders"
                      className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2dark:focus:ring-yellow-900"
                    >
                      My Orders
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex md:mt-0 justify-between mt-7">
            <div className="border-2 rounded-full w-16 h-16 p-3 text-white">
              <FaRegUser size={30}></FaRegUser>
            </div>
            <p className="m-5 text-xl text-white">{user.displayName}</p>
            <button
              onClick={handleLogOut}
              type="button"
              className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              LogOut
            </button>
          </div>
        </div>
      ) : (
        <div className="md:p-0 p-3">
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
      )}
    </div>
  );
};

export default Header;
