import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const totalYearUse = 2022 - product.purchaseYear;
  return (
    <div>
      {product.userId == user.uid ? (
        <div className="flex justify-between border-2 rounded-xl p-5 items-center m-2">
          <div
            className="flex items-center
            "
          >
            <div className="w-16 border-2 border-gray-300 rounded-xl">
              <img
                className="rounded-xl"
                src={product.image}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://p.kindpng.com/picc/s/9-91068_laptop-png-transparent-png.png";
                }}
                alt="laptop"
              />
            </div>
            <div className="ml-5">
              <p className="">Product Name: {product.name}</p>
              <p className="text-sm float-left">
                {product.details.slice(0, 35) + "..."}
              </p>
            </div>
          </div>
          <p className="">Brand: {product.brand}</p>
          <p className="">Resale Price: {product.resalePrice}</p>
          <p className=" flex items-center">
            Availablity
            {product.paid ? (
              <>
                <p>: Sold</p>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <p>: Available</p>
                  {product.advertised ? (
                    <>
                      <p className="mx-5">Product Advertised</p>
                    </>
                  ) : (
                    <>
                      <button className="ml-10 text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                        Post Product
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </p>
          <button className="text-white bg-red-500 hover:text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductCard;
