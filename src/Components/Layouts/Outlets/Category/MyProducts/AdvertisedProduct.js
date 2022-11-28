import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const AdvertisedProduct = (advertisedCount) => {
  const allProducts = useLoaderData();

  return (
    <div>
      {advertisedCount == 0 ? (
        <div className="">
          <h2 className="ml-5 text-left text-4xl">No Advertised Product</h2>
        </div>
      ) : (
        <div className="my-10">
          <h2 className="ml-5 text-left text-4xl">Advertised Product:</h2>
          <div>
            {allProducts.map((product) => {
              return product.advertised ? (
                <div>
                  {product.paid ? (
                    <></>
                  ) : (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  )}
                </div>
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

export default AdvertisedProduct;
