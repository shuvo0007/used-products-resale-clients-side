import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../../Hooks/useTitle";
import HpMap from "./HpMap";

const Hp = () => {
  useTitle("Hp");
  const allProducts = useLoaderData();

  return (
    <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
      <h2 className="yatra-font text-5xl my-10 underline">
        List of all HP laptop
      </h2>
      <div className="flex flex-wrap gap-10 justify-around">
        {allProducts.map((product) => (
          <HpMap key={product._id} product={product}></HpMap>
        ))}
      </div>
    </div>
  );
};

export default Hp;
