import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="flex items-center justify-between font-DmSans text-headinggrey">
        <div>
          <span className="text-5xl font-bold 2xl:text-7xl">
            sho.
          </span>
        </div>
        <ul className="flex space-x-16 text-2xl font-medium 2xl:space-x-32 2xl:text-5xl">
          <li>
            <a href="#">work</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
