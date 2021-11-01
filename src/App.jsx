import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="w-screen h-screen px-24 pt-10 2xl:px-44 2xl:pt-32">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
