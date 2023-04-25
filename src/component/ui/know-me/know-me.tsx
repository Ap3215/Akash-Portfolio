import { FC } from "react";
import Heading from "../heading/heading";
import Button from "../button/button";

import classes from "./know-me.module.css";
import { scrollToSection } from "../../../utils";

const KnowMe: FC = () => {
  return (
    <>
      <Heading type="h3">Get to Know Me</Heading>
      <p className={classes["know-me__desc1"]}>
        Hey! It's Akash Pal and I'm a Frontend Web Developer located in New
        Delhi. I've done remote projects for agencies, consulted for startups,
        and collaborated with talented people to create digital products for
        both business and consumer use.
      </p>
      <p className={classes["know-me__desc2"]}>
        I'm a bit of a digital product junky. Over the years, I've used hundreds
        of web and mobile apps in different industries and verticals. Feel free
        to contact me here.
      </p>
      <Button
        size="md"
        color="white"
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </Button>
    </>
  );
};

export default KnowMe;
