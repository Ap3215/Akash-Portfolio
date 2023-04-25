import { FC } from "react";

import classes from "./skill.module.css";

type SkillProps = {
  children: string;
};

export const Skill: FC<SkillProps> = ({ children }) => {
  return <li className={classes["skill"]}>{children}</li>;
};
