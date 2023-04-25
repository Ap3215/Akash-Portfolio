import React from "react";
import { Link } from "react-router-dom";

import classes from "./footer.module.css";
import Logo from "../../ui/logo/logo";
import {
  LinkedinIcon,
  InstaIcon,
  YoutubeIcon,
  GitIcon,
  TwitterIcon,
} from "../../../assets/icons";

const Footer = () => {
  return (
    <div className={classes["footer"]}>
      <div className={classes["footer__container"]}>
        <div className={classes["footer__contnent-box"]}>
          <div className={classes["footer__contnent-box--row1"]}>
            <Logo size="medium" />
            <p className={classes["footer__contnent-box--desc"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              debitis libero ea nobis est velit sunt ducimus?
            </p>
          </div>
          <div className={classes["footer__contnent-box--row2"]}>
            <h2 className={classes["footer__heading"]}>Social</h2>
            <div className={classes["footer__socials"]}>
              <Link to="" className={classes["footer__social--link"]}>
                <LinkedinIcon className={classes["footer__social--icon"]} />
              </Link>
            </div>
            <div className={classes["footer__socials"]}>
              <Link to="" className={classes["footer__social--link"]}>
                <GitIcon className={classes["footer__social--icon"]} />
              </Link>
            </div>
            <div className={classes["footer__socials"]}>
              <Link to="" className={classes["footer__social--link"]}>
                <TwitterIcon className={classes["footer__social--icon"]} />
              </Link>
            </div>
            <div className={classes["footer__socials"]}>
              <Link to="" className={classes["footer__social--link"]}>
                <YoutubeIcon className={classes["footer__social--icon"]} />
              </Link>
            </div>
            <div className={classes["footer__socials"]}>
              <Link to="" className={classes["footer__social--link"]}>
                <InstaIcon className={classes["footer__social--icon"]} />
              </Link>
            </div>
          </div>
        </div>
        <div className={classes["footer__lower-box"]}>
          © Copyright 2023. Made by{" "}
          <Link className={classes["footer__lower-box-text"]} to="/">
            Akash Pal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
