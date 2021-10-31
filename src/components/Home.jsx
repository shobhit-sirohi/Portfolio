import React from "react";
import ladka from "../images/ladka.svg";
import ladka2 from "../images/ladka2.svg";

const Home = () => {
  return (
    <div className="flex w-full h-5/6">
      <div className="flex flex-col justify-center w-1/2 text-left font-DmSans ">
        <h2 className="text-6xl font-medium ">
          Namaste, I’m
        </h2>
        <h2 className="mt-2 text-6xl font-medium">
          Shobhit Sirohi.
        </h2>
        <h3 className="mt-4 text-3xl font-medium font-DmSans text-textgrey">
          I design & build digital products
        </h3>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img
          className="h-4/5"
          src={ladka}
          alt="boy illustration"
        />
      </div>
    </div>
  );
};

export default Home;
