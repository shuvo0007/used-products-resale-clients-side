import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../../Hooks/useTitle";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  useTitle("My Products");
  const allProducts = useLoaderData();
  return (
    <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-white rounded-xl text-xl">
      <h2 className="yatra-font text-5xl my-10 underline">
        List of all your Products
      </h2>
      <div>
        {allProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
