import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../../Hooks/useTitle";
import DellMap from "./DellMap";

const Dell = () => {
  useTitle("Dell");
  const allProducts = useLoaderData();

  return (
    <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
      <h2 className="yatra-font text-5xl my-10 underline">
        List of all Dell laptop
      </h2>
      <div className="flex flex-wrap gap-10 justify-around">
        {allProducts.map((product) => (
          <DellMap key={product._id} product={product}></DellMap>
        ))}
      </div>
    </div>
  );
};

export default Dell;
