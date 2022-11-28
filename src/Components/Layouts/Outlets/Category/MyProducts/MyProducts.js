import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../../Hooks/useTitle";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import AdvertisedProduct from "./AdvertisedProduct";
import SoldProduct from "./SoldProduct";
import UnAdvertisedProduct from "./UnAdvertisedProduct";

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

          {/* -----------------------UnAdvertised Product --------------------------------*/}
          <UnAdvertisedProduct
            unAdvertisedCount={unAdvertisedCount}
          ></UnAdvertisedProduct>

          {/* -----------------------Advertised Product -----------------------*/}
          <AdvertisedProduct
            advertisedCount={advertisedCount}
          ></AdvertisedProduct>

          {/* -----------------------Sold Product -----------------------*/}
          <SoldProduct soldCount={soldCount}></SoldProduct>
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
