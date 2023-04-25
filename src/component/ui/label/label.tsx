import React, { FC } from "react";

import classes from "./label.module.css";
type LabelProps = {
  children: string;
};

const Label: FC<LabelProps> = ({ children }) => {
  return <label className={classes["label"]}> {children}</label>;
};

export default Label;
