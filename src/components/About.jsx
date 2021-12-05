import logo from "../images/logo.svg";

const About = () => {
  return (
    <div id="about" className="h-screen space-y-8 ">
      <h1 className="pt-24 text-7xl">About me.</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-2/3">
          <p>ABHI BNARA HU</p>
        </div>
        <div className="w-1/3">
          <img
            className="w-2/3 h-2/3"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
