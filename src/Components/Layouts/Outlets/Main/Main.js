import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import AdvertisedProduct from "./AdvertisedProduct";
import Category from "./Category";
import TopCarousel from "./TopCarousel";

const Main = () => {
  useTitle("Home");
  const allProducts = useLoaderData();

  return (
    <div>
      <div className="rounded-xl">
        <TopCarousel></TopCarousel>
      </div>
      <div className="rounded-xl">
        <Category></Category>
      </div>
      <div>
        {allProducts.map((product) => (
          <AdvertisedProduct
            key={product._id}
            product={product}
          ></AdvertisedProduct>
        ))}
      </div>
    </div>
  );
};

export default Main;
