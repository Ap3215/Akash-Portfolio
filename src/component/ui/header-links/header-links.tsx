import classes from "./header-links.module.css";
import HeaderLink from "../header-link/header-link";
import { MouseEvent } from "react";

const links = [
  {
    to: "#hero",
    title: "Home",
  },
  {
    to: "#about",
    title: "About",
  },
  {
    to: "#projects",
    title: "Projects",
  },
  {
    to: "#contact",
    title: "Contact",
  },
];

const HeaderLinks = () => {
  const onClickHandler = (event: MouseEvent, to: string) => {
    event.preventDefault();
    const section = document.querySelector(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // console.log(section);
  };
  return (
    <ul className={classes["link"]}>
      {links.map((link, index) => (
        <HeaderLink onClick={onClickHandler} key={index} to={link.to}>
          {link.title}
        </HeaderLink>
      ))}
    </ul>
  );
};

export default HeaderLinks;
