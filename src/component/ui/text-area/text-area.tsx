import { FC } from "react";

import classes from "./text-area.module.css";

type TextAreaProps = {
  name: string;
  rows: 5 | 10 | 15;
  cols: 10 | 20 | 30;
  children?: string;
  placeholder: string;
  onChange: any;
  value: string;
};

const TextArea: FC<TextAreaProps> = ({
  name,
  rows,
  cols,
  children,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <textarea
      className={classes["text-area"]}
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
