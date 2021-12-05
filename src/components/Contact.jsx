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
    <div id="contact" className="space-y-8 ">
      <h1 className="pt-24 text-7xl font-Inter">
        Connect with me.
      </h1>
      <div className="pt-10 font-Inter ">
        <div className="grid grid-cols-1 gap-10 md:justify-items-center lg:grid-cols-3 md:grid-cols-2">
          <a
            className="flex items-center p-2 space-x-2 text-black transform hover:scale-125"
            href="https://github.com/shobhit-sirohi"
            target="_blank"
          >
            <img
              src={github}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">Github</p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-twitter"
            href="https://twitter.com/ShobhitSirohi"
            target="_blank"
          >
            <img
              src={twitter}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">
              Twitter
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-linkedin"
            href="https://www.linkedin.com/in/shobhit-sirohi-8b0a803b/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">
              Linkedin
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-behance"
            href="https://www.behance.net/shobhitsirohi"
            target="_blank"
          >
            <img
              src={behance}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">
              Behance
            </p>
          </a>

          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-dribbble"
            href="https://dribbble.com/8bitboi"
            target="_blank"
          >
            <img
              src={dribbble}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">
              Dribbble
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-figma"
            href="https://www.figma.com/@shobhitsirohi"
            target="_blank"
          >
            <img
              src={figma}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">Figma</p>
          </a>

          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-gmail"
            href="mailto:shobhitsirohi.dev@gmail.com"
            target="_blank"
          >
            <img
              src={gmail}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">Gmail</p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-spotify"
            href="https://open.spotify.com/user/howdyboi22?si=a96ba306d7cd4448"
            target="_blank"
          >
            <img
              src={spotify}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">
              Spotify
            </p>
          </a>
          <a
            className="flex items-center p-2 space-x-2 transform hover:scale-125 text-steam"
            href="https://steamcommunity.com/id/8bitboi/"
            target="_blank"
          >
            <img
              src={steam}
              alt="twitter-logo"
              className="w-12 h-12"
            />
            <p className="text-3xl font-semibold">Steam</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
