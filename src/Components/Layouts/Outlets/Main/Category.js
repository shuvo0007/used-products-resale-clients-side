import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="my-10 ">
      <div className="mb-10">
        <p className="yatra-font text-4xl">OUR CATEGORY</p>
      </div>
      <div className="flex w-full justify-evenly">
        <div className="py-4 bg-white rounded-2xl px-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <p className=" text-3xl m-5">ASUS</p>
          <div className="max-w-sm flex flex-col justify-center items-center">
            <img
              className="rounded-xl h-64"
              src="https://dlcdnrog.asus.com/rog/media/1622468922392.webp"
              alt=""
            />
            <Link
              to="/asus"
              className="my-5 text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              <span className="flex px-5 py-2.5 ">
                See More <HiOutlineArrowRight className="ml-2 h-7 w-7" />
              </span>
            </Link>
          </div>
        </div>
        <div className="py-4 bg-white rounded-2xl px-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <p className=" text-3xl m-5">HP</p>
          <div className="max-w-sm flex flex-col justify-center items-center">
            <img
              className="rounded-xl h-64"
              src="https://reviewed-com-res.cloudinary.com/image/fetch/s--pLupLqoY--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1591417048360/HP-Omen-X-2s-Hero2.jpg"
              alt=""
            />

            <Link
              to="/hp"
              className="my-5 text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              <span className="flex px-5 py-2.5">
                See More <HiOutlineArrowRight className="ml-2 h-7 w-7" />
              </span>
            </Link>
          </div>
        </div>
        <div className="py-4 bg-white rounded-2xl px-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <p className=" text-3xl m-5">DELL</p>
          <div className="max-w-sm flex flex-col justify-center items-center">
            <img
              className="rounded-xl h-64"
              src="https://i.ytimg.com/vi/t7sOFoS-IRk/maxresdefault.jpg"
              alt=""
            />
            <Link
              to="/dell"
              className="my-5 text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              <span className="flex px-5 py-2.5">
                See More <HiOutlineArrowRight className="ml-2 h-7 w-7" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
