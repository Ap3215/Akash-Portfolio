import { FC } from "react";

import classes from "./avator.module.css";

const Avator: FC = () => {
  return (
    <img
      className={classes["avator"]}
      src="images/1616576677710-300x294.jpg"
      alt="Akash Pal"
    />
  );
};

export default Avator;
