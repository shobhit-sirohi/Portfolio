import React from "react";
import ladka from "../images/ladka.svg";
import ladka2 from "../images/ladka2.svg";

const Home = () => {
  return (
    <div className="flex w-full h-5/6">
      <div className="flex flex-col justify-between w-1/2 mt-32 text-left 2xl:mt-48 font-DmSans ">
        <div>
          <h2 className="text-6xl font-medium 2xl:text-8xl">
            Namaste, I’m
          </h2>
          <h2 className="mt-2 text-6xl font-medium 2xl:text-8xl">
            Shobhit Sirohi.
          </h2>
          <h3 className="mt-2 text-3xl font-medium 2xl:text-5xl font-DmSans text-textgrey">
            I design & build digital products
          </h3>
        </div>

        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 p-6">
        <img
          className="h-full"
          src={ladka}
          alt="boy illustration"
        />
      </div>
    </div>
  );
};

export default Home;
