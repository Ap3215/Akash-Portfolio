import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./header-link.module.css";

type HeaderLinkProps = {
  children: string;
  to: string;
  onClick: any;
};

const HeaderLink: FC<HeaderLinkProps> = ({ children, to, onClick }) => {
  return (
    <li>
      <Link
        className={classes["header-link"]}
        to={to}
        onClick={(e) => onClick(e, to)}
      >
        {children}
      </Link>
    </li>
  );
};

export default HeaderLink;
