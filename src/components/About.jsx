import fav from "../images/fav.png";
const About = () => {
  return (
    <div id="about" className="space-y-8 ">
      <h1 className="pt-24 text-7xl font-Inter">
        About me.
      </h1>
      <div className="flex flex-col pt-10 md:flex-row">
        <div className="space-y-4 text-3xl font-medium lg:space-y-6 md:text-3xl 2xl:text-4xl font-Inter text-textgrey">
          <h2>
            I am a Front-End Developer from Meerut, India 🇮🇳
          </h2>
          <h2 className="">
            Working as an Intern at <> </>
            <a
              href="https://learnwithleaders.com"
              target="_blank"
              className=" hover:text-blue-500"
            >
              Learn with Leaders
            </a>
            .
          </h2>
          <h2>
            Old, Boring and Non-Responsive websites are my
            biggest Pet Peeves 🤢
          </h2>
          <h2 className="">
            Currently building<> </>
            <a
              href="https://github.com/shobhit-sirohi/pokeapi"
              target="_blank"
              className=" hover:text-blue-500"
            >
              PokeAPI Project
            </a>
            .
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
