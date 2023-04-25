import React, { FC } from "react";

import classes from "./heading.module.css";
import { combineClass } from "../../../utils";
type HeagingProps = {
  children: string;
  type: "h1" | "h2" | "h3" | "h4";
};
const Heading: FC<HeagingProps> = ({ children, type }) => {
  const attachClassHandler = () => {
    const headingClasses = [classes["heading"], classes[`heading--${type}`]];
    return combineClass(headingClasses);
  };

  if (type === "h1") {
    return <h1 className={attachClassHandler()}>{children}</h1>;
  }
  if (type === "h2") {
    return <h2 className={attachClassHandler()}>{children}</h2>;
  }
  if (type === "h3") {
    return <h3 className={attachClassHandler()}>{children}</h3>;
  }
  return <h4 className={attachClassHandler()}>{children}</h4>;
};

export default Heading;
