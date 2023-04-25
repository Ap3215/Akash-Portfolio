import { FC } from "react";

import classes from "./section.module.css";

type SectionProsp = {
  children: string;
};

const Section: FC<SectionProsp> = ({ children }) => {
  return (
    <section className={classes["section__pad"]}>
      <div className={classes["section__container"]}>{children}</div>
    </section>
  );
};

export default Section;
