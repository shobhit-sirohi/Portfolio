import React from "react";
import ladka from "../images/ladka.svg";
import arrow from "../images/arrow.svg";

const Home = () => {
  return (
    <div
      className="flex flex-col w-full md:flex-row md:h-5/6"
      id="home"
    >
      <div className="flex flex-col justify-between mt-10 text-left md:w-1/2 md:mt-32 2xl:mt-48 font-DmSans ">
        <div>
          <h2 className="text-5xl font-medium boxy lg:text-6xl 2xl:text-7xl">
            <span></span>, I’m
          </h2>
          <h2 className="mt-2 text-5xl font-medium sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl">
            Shobhit Sirohi.
          </h2>
          <h3 className="mt-2 text-3xl font-medium md:text-3xl 2xl:text-4xl font-DmSans text-textgrey">
            I design & build digital products.
          </h3>
        </div>
        <div className="hidden md:flex">
          <img
            className="w-8 h-8"
            src={arrow}
            alt="downwards arrow"
          />
        </div>
      </div>

      <div className="flex items-center justify-center text-black px-14 md:px-0 md:w-1/2 ">
        <img
          className="xl:h-5/6"
          src={ladka}
          alt="boy illustration"
        />
      </div>
    </div>
  );
};

export default Home;
