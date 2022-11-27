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
  return (
    <div>
      {allProducts.map((product) => {
        return product.userId == user.uid ? (
          <div className="hidden">{(count = count + 1)}</div>
        ) : (
          <></>
        );
      })}
      {
        count>0?(<div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
        <h2 className="yatra-font text-5xl my-10 underline">
          List of all your Products
        </h2>
        <div>
          {allProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>):(<div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
        <p className="yatra-font text-4xl my-10">No Product has been listed yet</p>
      </div>)
      }
    </div>
  );
};

export default MyProducts;
