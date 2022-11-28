import React from "react";
import { Link } from "react-router-dom";

const DellMap = ({ product }) => {
  const yearOfUse = 2022 - product.purchaseYear;
  return (
    <div
      className={`rounded-xl bg-white p-5 mt-16 ${
        product.brand == "dell" ? "" : "hidden"
      } ${product.paid ? "hidden" : ""}`}
    >
      {product.paid ? (
        <></>
      ) : (
        <>
          {product.brand == "dell" ? (
            <>
              <div className="max-w-sm text-left ">
                <div>
                  <img
                    className="rounded-xl h-96 w-full"
                    src={product.image}
                    alt="laptop"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src =
                        "https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/4101d83b54c7b8d58639aba6fa6622e6.jpg&w=70&zc=1";
                    }}
                  />
                  <div className="text-2xl my-5 text-justify">
                    <h2 className="text-2xl  tracking-tight text-gray-900 dark:text-white">
                      <span className="font-bold">Name: </span>
                      {product.name}
                    </h2>
                    <p className="">
                      <span className="font-bold">Location:</span>{" "}
                      {product.location}
                    </p>
                    <p className="">
                      <span className="font-bold">Resale Price:</span>{" "}
                      {product.resalePrice} tk
                    </p>
                    <p className="">
                      <span className="font-bold">Original Price:</span>{" "}
                      {product.originalPrice} tk
                    </p>
                    <p className="">
                      <span className="font-bold">Years of use:</span>{" "}
                      {yearOfUse} years
                    </p>
                    <p></p>
                    <p className="">
                      <span className="font-bold">Seller Name:</span>{" "}
                      {product.userName}
                    </p>
                  </div>
                  <Link to={"/private/myOrders"}>
                    <button className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 w-full">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default DellMap;
