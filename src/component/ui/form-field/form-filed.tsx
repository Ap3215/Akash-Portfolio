import { FC } from "react";

import Label from "../label/label";
import classes from "./form-filed.module.css";
import Input from "../input/input";

type FormFiledProps = {
  label: string;
  type: "text" | "email";
  placeholder: string;
  name: string;
  onChange: any;
  value: string;
};

const FormFiled: FC<FormFiledProps> = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <div className={classes["form-filed"]}>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormFiled;
