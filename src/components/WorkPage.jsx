import React from "react";
import Work from "./Work";
import homepage from "../images/homepage.png";
import starbucks from "../images/starbucks.png";
import portfolio from "../images/portfolio.png";
import clock from "../images/clock.png";
import dicegame from "../images/dicegame.png";
const WorkPage = () => {
  return (
    <div id="work" className="space-y-4 md:space-y-8">
      <h1 className="pt-10 text-5xl md:pt-24 lg:text-7xl font-Inter">
        My Work.
      </h1>
      <Work
        heading="01 / HOMEPAGE"
        text="A Responsive Home Page for a Design Agency, made with React and TailwindCss."
        image={homepage}
        gitLink="https://github.com/shobhit-sirohi/HomePage"
        demoLink="https://home-page-shobhit-sirohi.netlify.app/"
      />
      <Work
        heading="02 / STARBUCKS REWARDS PAGE"
        text="A fully Responsive Clone of Starbucks Rewards Page. Made with HTML and TailwindCss."
        image={starbucks}
        gitLink="https://github.com/shobhit-sirohi/starbucks-rewards-page-clone"
        demoLink="https://starbucksrewards.netlify.app/"
      />
      <Work
        heading="05 / DICE GAME"
        text="A Dice Rolling game that guesses the randomly generated dice outcome. Made with HTML, CSS and Javascript."
        image={dicegame}
        gitLink="https://github.com/shobhit-sirohi/DiceGame"
        demoLink="https://dice-game-shobhit-sirohi.netlify.app/"
      />
      <Work
        heading="03 / PORTFOLIO"
        text="My Personal Portfolio. Made with React and TailwindCss. Responsive For a wide range of screens from Small to Ultrawide."
        image={portfolio}
        gitLink="https://github.com/shobhit-sirohi/Portfolio"
        demoLink="https://www.shobhitsirohi.com/"
      />
      <Work
        heading="04 / JAVASCRIPT CLOCK"
        text="A Clock made with HTML, CSS and Javascript. It Shows the Timezone where the user is located."
        image={clock}
        gitLink="https://github.com/shobhit-sirohi/Clock"
        demoLink="https://earth-clock.netlify.app/"
      />
    </div>
  );
};
export default WorkPage;
