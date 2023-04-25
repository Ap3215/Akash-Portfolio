import React, { FC } from "react";

import { Link } from "react-router-dom";

import classes from "./logo.module.css";
import { combineClass } from "../../../utils";

type LogoProps = {
  size: "small" | "medium";
};

const Logo: FC<LogoProps> = ({ size }) => {
  return (
    <Link
      to="/"
      className={combineClass(classes["logo"], classes[`logo--${size}`])}
    >
      Akash Pal
    </Link>
  );
};

export default Logo;
