import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import dribbble from "../images/dribbble.svg";
import behance from "../images/behance.svg";
import figma from "../images/figma-logo.svg";
import steam from "../images/steam.svg";
import spotify from "../images/spotify.svg";
import gmail from "../images/gmail.svg";

const Contact = () => {
  return (
    <div id="contact" className="space-y-4 md:space-y-8 ">
      <h1 className="pt-24 text-5xl lg:text-7xl font-Inter">
        Connect with me.
      </h1>
      <div className="pt-10 font-Inter ">
        <div className="grid grid-cols-2 gap-4 md:gap-10 md:justify-items-center lg:grid-cols-3 ">
          <a
            className="flex items-center p-2 space-x-2 text-black transform md:hover:scale-125"
            href="https://github.com/shobhit-sirohi"
            target="_blank"
          >
            <img
              src={github}
              alt="github-logo"
              className="w-11 h-11"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Github
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-twitter"
            href="https://twitter.com/ShobhitSirohi"
            target="_blank"
          >
            <img
              src={twitter}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Twitter
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-linkedin"
            href="https://www.linkedin.com/in/shobhit-sirohi-8b0a803b/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Linkedin
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-behance"
            href="https://www.behance.net/shobhitsirohi"
            target="_blank"
          >
            <img
              src={behance}
              alt="behance-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Behance
            </p>
          </a>

          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-dribbble"
            href="https://dribbble.com/8bitboi"
            target="_blank"
          >
            <img
              src={dribbble}
              alt="dribbble-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Dribbble
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-figma"
            href="https://www.figma.com/@shobhitsirohi"
            target="_blank"
          >
            <img
              src={figma}
              alt="figma-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Figma
            </p>
          </a>

          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-gmail"
            href="mailto:shobhitsirohi.dev@gmail.com"
            target="_blank"
          >
            <img
              src={gmail}
              alt="gmail-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Gmail
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-spotify"
            href="https://open.spotify.com/user/howdyboi22?si=a96ba306d7cd4448"
            target="_blank"
          >
            <img
              src={spotify}
              alt="spotify-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Spotify
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform md:hover:scale-125 text-steam"
            href="https://steamcommunity.com/id/8bitboi/"
            target="_blank"
          >
            <img
              src={steam}
              alt="steam-logo"
              className="w-12 h-12"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              Steam
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
