import { FC } from "react";
// import Section from "../../component/ui/section/section";
import Heading from "../../component/ui/heading/heading";

import classes from "./about.module.css";
import KnowMe from "../../component/ui/know-me/know-me";
import Skills from "../../component/ui/skills/skills";

const About: FC = () => {
  return (
    <section id="about" className={classes["about"]}>
      <div className={classes["about__container"]}>
        <div className={classes["about__heading"]}>
          <Heading type="h2">About Me</Heading>
          <p className={classes["about__heading--sub-heading"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, saepe! Rerum voluptatum ipsum natus cupiditate!
          </p>
        </div>
        <div className={classes["about__content"]}>
          <div>
            <KnowMe />
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
