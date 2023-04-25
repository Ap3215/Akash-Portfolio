import React, { Children, FC } from "react";

import classes from "./button.module.css";
import { combineClass } from "../../../utils";

type ButtonProps = {
  color: "black" | "white";
  size: "big" | "md";
  children: string;
  onClick?: any;
};

const Button: FC<ButtonProps> = ({ color, children, size, onClick }) => {
  return (
    <button
      className={combineClass(
        classes["button"],
        classes[`button--${color}`],
        classes[`button--${size}`]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
