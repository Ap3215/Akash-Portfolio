import React, { FC } from "react";

import Button from "../button/button";
import Heading from "../heading/heading";

import classes from "./project.module.css";

type ProjectProps = {
  heading: string;
  description: string;
  imgSrc: string;
};

const Project: FC<ProjectProps> = ({ heading, description, imgSrc }) => {
  return (
    <div className={classes["project__content__row"]}>
      <div className={classes["project__content__row-img"]}>
        <img
          className={classes["project__img"]}
          src={imgSrc}
          alt="laptop img"
        />
      </div>
      <div className={classes["project__content__row--desc"]}>
        <Heading type="h3">{heading}</Heading>
        <p className={classes["project-content-desc"]}>{description}</p>
        <Button size="md" color="white">
          Case Study
        </Button>
      </div>
    </div>
  );
};

export default Project;
