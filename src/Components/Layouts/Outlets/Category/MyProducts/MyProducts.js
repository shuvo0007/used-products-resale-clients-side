import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../../Hooks/useTitle";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);

  const allProducts = useLoaderData();
  let count = 0;
  let soldCount = 0;
  let advertisedCount = 0;
  let unAdvertisedCount = 0;
  return (
    <div>
      {allProducts
        .slice()
        .reverse()
        .map((product) => {
          return product.userId == user.uid ? (
            <div>
              <div className="hidden">{(count = count + 1)}</div>
              <div className="hidden">
                {product.paid ? (
                  (soldCount = soldCount + 1)
                ) : (
                  <div className="hidden"></div>
                )}
              </div>
              <div className="hidden">
                {product.advertised
                  ? (advertisedCount = advertisedCount + 1)
                  : (unAdvertisedCount = unAdvertisedCount + 1)}
              </div>
            </div>
          ) : (
            <></>
          );
        })}
      {count > 0 ? (
        <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
          <h2 className="yatra-font text-5xl my-10 underline">
            List of all your Products
          </h2>
          {/* UnAdvertised Product */}
          {unAdvertisedCount == 0 ? (
            <div className="hidden"></div>
          ) : (
            <div className="my-10">
              <h2 className="ml-5 text-left text-4xl">UnAdvertised Product:</h2>
              <div>
                {allProducts.map((product) => {
                  return product.advertised ? (
                    <></>
                  ) : (
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
                  );
                })}
              </div>
            </div>
          )}
          {/* Advertised Product */}
          {advertisedCount == 0 ? (
            <div className="hidden"></div>
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
          {/* Sold Product */}
          {soldCount == 0 ? (
            <div className="hidden"></div>
          ) : (
            <div className="my-10">
              <h2 className="ml-5 text-left text-4xl">Sold Product:</h2>
              <div>
                {allProducts.map((product) => {
                  return product.paid ? (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ) : (
                    <></>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
          <p className="yatra-font text-4xl my-10">
            No Product has been listed yet
          </p>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
