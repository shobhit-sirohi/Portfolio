import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="flex items-center justify-between font-DmSans text-headinggrey">
        <div>
          <span className="text-5xl font-bold">sho.</span>
        </div>
        <ul className="flex space-x-16 text-2xl font-medium">
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
