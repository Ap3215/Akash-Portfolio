import { FC } from "react";
import { nanoid } from "nanoid";

import Heading from "../../component/ui/heading/heading";
import Project from "../../component/ui/project/project";

import classes from "./projects.module.css";

const projects = [
  {
    id: nanoid(),
    heading: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicfacilis tempora, explicabo quae quod deserunt eius sapiente praesentium.",
    imgSrc: "/images/project-mockup-example.jpeg",
  },
  {
    id: nanoid(),
    heading: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicfacilis tempora, explicabo quae quod deserunt eius sapiente praesentium.",
    imgSrc: "/images/project-mockup-example.jpeg",
  },
  {
    id: nanoid(),
    heading: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicfacilis tempora, explicabo quae quod deserunt eius sapiente praesentium.",
    imgSrc: "/images/project-mockup-example.jpeg",
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className={classes["projects"]}>
      <div className={classes["projects__container"]}>
        <div className={classes["projects__heading"]}>
          <Heading type="h2">Projects</Heading>
          <p className={classes["projects__heading--sub-heading"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, saepe! Rerum voluptatum ipsum natus cupiditate!
          </p>
        </div>
        <div className={classes["projects__content"]}>
          {projects.map((item) => (
            <Project
              key={item.id}
              heading={item.heading}
              description={item.description}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
