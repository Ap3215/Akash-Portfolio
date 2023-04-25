import { FC } from "react";

import classes from "./input.module.css";

type InputProps = {
  type: "email" | "text";
  placeholder: string;
  name: string;
  onChange: any;
  value: string;
};

const Input: FC<InputProps> = ({
  placeholder,
  type,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      className={classes["input"]}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
