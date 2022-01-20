import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import WorkPage from "./components/WorkPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen px-4 pt-4 lg:px-20 lg:pt-10 2xl:px-24 2xl:pt-14">
      <Navigation />
      <Home />
      <About />
      <WorkPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
