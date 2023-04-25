import { FC } from "react";
import AvatorLogo from "../../ui/avator-logo/avator-logo";
import HeaderLinks from "../../ui/header-links/header-links";

import classes from "./header.module.css";

const Header: FC = () => {
  return (
    <div className={classes["header"]}>
      <AvatorLogo />
      <HeaderLinks />
    </div>
  );
};

export default Header;
