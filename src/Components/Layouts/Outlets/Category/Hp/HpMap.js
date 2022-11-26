import React from "react";

const HpMap = ({ product }) => {
  const yearOfUse = 2022 - product.purchaseYear;

  return (
    <div
      className={`rounded-xl bg-white p-5 mt-16 ${
        product.brand == "hp" ? "" : "hidden"
      }`}
    >
      {product.brand == "hp" ? (
        <>
          <div className="max-w-sm text-left ">
            <div>
              <img
                className="rounded-xl h-96 w-full"
                src={product.image}
                alt="laptop"
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
                  <span className="font-bold">Years of use:</span> {yearOfUse}{" "}
                  years
                </p>
                <p></p>
                <p className="">
                  <span className="font-bold">Seller Name:</span>{" "}
                  {product.userName}
                </p>
              </div>
              <button className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 w-full">
                Book Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HpMap;
