import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const UnAdvertisedProduct = (unAdvertisedCount) => {
  const allProducts = useLoaderData();

  return (
    <div>
      {unAdvertisedCount == 0 ? (
        <div className="hidden"></div>
      ) : (
        <div className="my-10">
          <h2 className="ml-5 text-left md:text-4xl text-2xl">UnAdvertised Product:</h2>
          <div>
            {allProducts.map((product) => {
              return product.advertised ? (
                <></>
              ) : (
                <div className="">
                  {product.paid ? (
                    <></>
                  ) : (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UnAdvertisedProduct;
