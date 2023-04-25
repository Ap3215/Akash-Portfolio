import { FC } from "react";

import classes from "./avator-logo.module.css";
import Avator from "../avator/avator";
import Logo from "../logo/logo";

const AvatorLogo: FC = () => {
  return (
    <div className={classes["avator-logo"]}>
      <Avator />
      <Logo size="small" />
    </div>
  );
};

export default AvatorLogo;
