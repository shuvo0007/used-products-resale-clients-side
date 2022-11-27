import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../../Hooks/useTitle";
import AsusMap from "./AsusMap";

const Asus = () => {
  useTitle("Asus");
  let count = 0;
  const allProducts = useLoaderData();
  return (
    <div>
      {allProducts.map((product) => {
        return product.brand == "asus" ? (
          <div className="hidden">{(count = count + 1)}</div>
        ) : (
          <></>
        );
      })}
      {count > 0 ? (
        <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
          <h2 className="yatra-font text-5xl my-10 underline">
            List of all ASUS laptop
          </h2>
          <div className="flex flex-wrap gap-10 justify-around">
            {allProducts
              .slice()
              .reverse()
              .map((product) => (
                <AsusMap key={product._id} product={product}></AsusMap>
              ))}
          </div>
        </div>
      ) : (
        <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
          <p className="yatra-font text-4xl my-10">
            No Laptop in this category
          </p>
        </div>
      )}
    </div>
  );
};

export default Asus;
