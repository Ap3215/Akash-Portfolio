import { FC } from "react";
import Heading from "../../ui/heading/heading";
import Button from "../../ui/button/button";

import { scrollToSection } from "../../../utils";
import { Link } from "react-router-dom";

import classes from "./hero.module.css";
import { nanoid } from "nanoid";
import {
  LinkedinIcon,
  InstaIcon,
  YoutubeIcon,
  GitIcon,
  TwitterIcon,
} from "../../../assets/icons";

const icons = [
  {
    id: nanoid(),
    title: <LinkedinIcon />,
  },
  {
    id: nanoid(),
    title: <InstaIcon />,
  },
  {
    id: nanoid(),
    title: <YoutubeIcon />,
  },
  {
    id: nanoid(),
    title: <GitIcon />,
  },
  {
    id: nanoid(),
    title: <TwitterIcon />,
  },
];

const Hero: FC = () => {
  return (
    <section id="hero" className={classes["hero"]}>
      <div className={classes["hero__content"]}>
        <Heading type="h1">Hey, My Name is Akash Pal</Heading>
        <p className={classes["hero--description"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          repellat odio. Totam velit impedit temporibus ea at autem magni .
        </p>
        <div className={classes["hero__button"]}>
          <Button
            size="big"
            color="black"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
        </div>
      </div>

      <div className={classes["hero__socials"]}>
        <div className={classes["hero__social"]}>
          {/* {icons.map((icon) => (
            <Link to="" key={icon.id} className={classes["hero__social--link"]}>
              <img
                className={classes["hero__social--icon"]}
                src={icon.title}
                alt=""
              />
            </Link>
          ))} */}
        </div>
        <div className={classes["hero__social"]}>
          <Link to="" className={classes["hero__social--link"]}>
            <LinkedinIcon className={classes["hero__social-icon"]} />
          </Link>
        </div>
        <div className={classes["hero__social"]}>
          <Link to="" className={classes["hero__social--link"]}>
            <GitIcon className={classes["hero__social-icon"]} />
          </Link>
        </div>
        <div className={classes["hero__social"]}>
          <Link to="" className={classes["hero__social--link"]}>
            <TwitterIcon className={classes["hero__social-icon"]} />
          </Link>
        </div>
        <div className={classes["hero__social"]}>
          <Link to="" className={classes["hero__social--link"]}>
            <YoutubeIcon className={classes["hero__social-icon"]} />
          </Link>
        </div>
        <div className={classes["hero__social"]}>
          <Link to="" className={classes["hero__social--link"]}>
            <InstaIcon className={classes["hero__social-icon"]} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
