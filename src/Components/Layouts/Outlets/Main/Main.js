import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import AdvertisedProduct from "./AdvertisedProduct";
import Category from "./Category";
import TopCarousel from "./TopCarousel";

const Main = () => {
  useTitle("Home");
  const allProducts = useLoaderData();
  let count = 0;
  return (
    <div>
      <div className="rounded-xl">
        <TopCarousel></TopCarousel>
      </div>
      <div className="rounded-xl">
        <Category></Category>
      </div>
      {allProducts.map((product) => {
        return product.advertised ? (count = count + 1) : <></>;
      })}
      {count > 0 && (
        <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
          <h2 className="yatra-font text-5xl my-10 underline">
            List of Advertised laptop
          </h2>
          <div className="flex flex-wrap gap-10 justify-around">
            {allProducts
              .slice()
              .reverse()
              .map((product) => (
                <AdvertisedProduct
                  key={product._id}
                  product={product}
                ></AdvertisedProduct>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
