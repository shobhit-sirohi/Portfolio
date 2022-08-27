import git from "../images/git.svg";
import github from "../images/github.svg";
import css from "../images/css.svg";
import html from "../images/html.svg";
import js from "../images/js.svg";
import macos from "../images/macos.png";
import npm from "../images/npm.svg";
import vite from "../images/vite.svg";
import netlify from "../images/netlify.svg";
import react from "../images/react.svg";
import tailwind from "../images/tailwind.svg";
import vscode from "../images/vscode.svg";

const About = () => {
  return (
    <div id="about" className="space-y-4 md:space-y-8">
      <h1 className="pt-24 text-5xl lg:text-6xl font-Inter">
        About me.
      </h1>
      <div className="flex flex-col pt-6 md:pt-10 md:flex-row">
        <div className="space-y-4 text-2xl font-medium lg:space-y-6 md:text-3xl 2xl:text-4xl font-Inter text-textgrey">
          <h2>
            I am a Front-End Engineer from Meerut, India
          </h2>
          {/* <h2 className="">
            Working as an Intern at <> </>
            <a
              href="https://learnwithleaders.com"
              target="_blank"
              className="underline hover:text-blu"
            >
              Learn with Leaders
            </a>
            .
          </h2> */}
          <h2></h2>
          <h2 className="">
            Currently centering divs&nbsp;
            <a
              href="https://kaseya.com"
              target="_blank"
              className=" hover:text-orangy"
            >
              @Kaseya
            </a>
          </h2>
        </div>
      </div>
      <div className="pt-8 space-y-4 text-2xl font-medium lg:space-y-6 md:text-3xl 2xl:text-4xl font-Inter text-orangy">
        <h2>Familiar Technologies :</h2>
        <div className="grid grid-cols-4 gap-4 md:pt-4 md:gap-10 lg:grid-cols-6 md:grid-cols-5 2xl:8 justify-items-center">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={html}
              alt="html logo"
              className="w-12 h-12"
            />
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={css}
              alt="css logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={js}
              alt="javascript logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={react}
              alt="react logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={tailwind}
              alt="git logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={netlify}
              alt="netlify logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://git-scm.com/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={git}
              alt="git logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://www.npmjs.com/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={npm}
              alt="npm logo"
              className="w-12 h-12"
            />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={github}
              alt="github logo"
              className="w-11 h-11"
            />
          </a>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={vscode}
              alt="vscode logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={vite}
              alt="vite logo"
              className="w-12 h-12"
            />
          </a>

          <a
            href="https://www.apple.com/in/macos/monterey/"
            target="_blank"
            className="hover:opacity-80 "
          >
            <img
              src={macos}
              alt="macos logo"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
