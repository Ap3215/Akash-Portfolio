import { FC } from "react";
import Heading from "../heading/heading";
import { Skill } from "../skill/skill";

import classes from "./skills.module.css";
import { nanoid } from "nanoid";

const skillList = [
  { title: "HTML", id: nanoid() },
  { title: "CSS", id: nanoid() },
  { title: "JAVASCRIPT", id: nanoid() },
  { title: "REACT", id: nanoid() },
  { title: "TYPESCRIPT", id: nanoid() },
  { title: "GIT", id: nanoid() },
];

const Skills: FC = () => {
  return (
    <>
      <Heading type="h3">My Skills</Heading>
      <div className="skills__box">
        <ul className={classes["skill__list"]}>
          {skillList.map((skill) => (
            <Skill key={skill.id}>{skill.title}</Skill>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
