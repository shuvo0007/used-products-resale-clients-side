import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const SoldProduct = (soldCount) => {
  const allProducts = useLoaderData();

  return (
    <div>
      {soldCount == 0 ? (
        <div className="hidden"></div>
      ) : (
        <div className="my-10">
          <h2 className="ml-5 text-left text-4xl">Sold Product:</h2>
          <div>
            {allProducts.map((product) => {
              return product.paid ? (
                <ProductCard key={product._id} product={product}></ProductCard>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SoldProduct;
