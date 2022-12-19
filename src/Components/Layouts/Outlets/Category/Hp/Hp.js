import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../../Hooks/useTitle";
import HpMap from "./HpMap";

const Hp = () => {
  useTitle("Hp");
  let countBrand = 0;
  const allProducts = useLoaderData();

  return (
    <div>
      {allProducts.map((product) => {
        return product.brand == "hp" ? (
          <div className="hidden">{(countBrand = countBrand + 1)}</div>
        ) : (
          <div className="hidden"></div>
        );
      })}
      {countBrand > 0 ? (
        <div className="my-28 py-10 md:px-10 px-2 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
          <h2 className="yatra-font md:text-5xl text-3xl md:my-10 underline">
            List of all HP laptop
          </h2>
          <div className="flex flex-wrap gap-10 justify-around">
            {allProducts
              .slice()
              .reverse()
              .map((product) => (
                <HpMap key={product._id} product={product}></HpMap>
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

export default Hp;
