import React from "react";
import Work from "./Work";
import gsip from "../images/gsip.png";
import starbucks from "../images/starbucks.png";
import spacetagram from "../images/spacetagram.png";
import dicegame from "../images/dicegame.png";
import pokedex from "../images/pokedex.png";
import savecow from "../images/savecow.jpeg";
const WorkPage = () => {
  return (
    <div id="work" className="space-y-4 md:space-y-8">
      <h1 className="pt-10 text-5xl md:pt-24 lg:text-6xl font-Inter">
        My Work.
      </h1>
      <Work
        heading="01 / POKEDEX"
        text="PokéDex ( Pokemon Wiki ) using PokéApi. Built with React and
        TailwindCss. 20 Alphabetical Component based Pokemon cards."
        image={pokedex}
        gitLink="https://github.com/shobhit-sirohi/Pokedex"
        demoLink="https://pokedex-shobhit.netlify.app/"
      />
      <Work
        heading="02 / SPACETAGRAM"
        text="Randomly Generated Data Cards from Nasa's APOD API. Built using React and TailwindCss. Implemented React Router DOM for the picture of the day page."
        image={spacetagram}
        gitLink="https://github.com/shobhit-sirohi/shopify-challenge-2022"
        demoLink="https://spacetagram-shobhit-sirohi.netlify.app/"
      />
      <Work
        heading="03 / SAVE THE COW!"
        text="A CLI app using template literals with Raw ASCII art. Built with Node.js"
        image={savecow}
        gitLink="https://github.com/shobhit-sirohi/Cow.js"
        demoLink="https://replit.com/@shobhit-sirohi/Guess-the-Animal#index.js"
      />
      <Work
        heading="04 / GLOBAL SCHOLAR INTERNSHIP PROGRAM's WEBSITE"
        text="World’s First Rotational Global Internship Program under the guidance of Ivy league Mentors & Corporate Executives. Built with React and TailwindCss, Pages are implemented by using React Router DOM."
        image={gsip}
        gitLink="https://github.com/shobhit-sirohi/gsip"
        demoLink="https://gsip.netlify.app/"
      />

      <Work
        heading="05 / STARBUCKS REWARDS PAGE CLONE"
        text="A fully Responsive Clone of Starbucks Rewards Page. Made with HTML and TailwindCss."
        image={starbucks}
        gitLink="https://github.com/shobhit-sirohi/starbucks-rewards-page-clone"
        demoLink="https://starbucksrewards.netlify.app/"
      />
      <Work
        heading="06 / DICE GAME"
        text="A Dice Rolling game that guesses the randomly generated dice outcome. Made with HTML, CSS and Javascript."
        image={dicegame}
        gitLink="https://github.com/shobhit-sirohi/DiceGame"
        demoLink="https://dice-game-shobhit-sirohi.netlify.app/"
      />
    </div>
  );
};
export default WorkPage;
