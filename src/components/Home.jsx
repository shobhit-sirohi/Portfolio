import React from "react";
import ladka from "../images/ladka.svg";
import ladka2 from "../images/ladka2.svg";

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full md:flex-row md:h-5/6">
      <div className="flex flex-col mt-10 text-left md:w-1/2 md:mt-32 2xl:mt-48 font-DmSans ">
        <div>
          <h2 className="text-4xl font-medium sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl">
            Namaste, I’m
          </h2>
          <h2 className="mt-2 text-4xl font-medium sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl">
            Shobhit Sirohi.
          </h2>
          <h3 className="mt-2 text-2xl font-medium md:text-3xl 2xl:text-4xl font-DmSans text-textgrey">
            I design & build digital products.
          </h3>
        </div>

        {/* <div className="mousey">
          <div className="scroller"></div>
        </div> */}
      </div>
      <div className="items-center justify-center p-6 md:w-1/2 md:flex">
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