import React from "react";
import useTitle from "../../../../Hooks/useTitle";
import Category from "./Category";
import TopCarousel from "./TopCarousel";

const Main = () => {
  useTitle("Home");
  return (
    <div>
      <div className="rounded-xl">
        <TopCarousel></TopCarousel>
      </div>
      <div className="rounded-xl">
        <Category></Category>
      </div>
    </div>
  );
};

export default Main;
