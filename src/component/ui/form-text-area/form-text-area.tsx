import React, { FC } from "react";

import classes from "./form-text-area.module.css";
import Label from "../label/label";
import TextArea from "../text-area/text-area";

type FormTextAreaProsp = {
  name: string;
  placeholder: string;
  label: string;
  onChange: any;
  value: string;
};

const FormTextArea: FC<FormTextAreaProsp> = ({
  name,
  label,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className={classes["form-text-area"]}>
      <Label>{label}</Label>
      <TextArea
        name={name}
        cols={30}
        rows={5}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></TextArea>
    </div>
  );
};

export default FormTextArea;
