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
      "This is Gallery application bulid with React and Firebase. Its allows you to upload images and fetch them in real time",
    imgSrc: "/images/Perfect-picture.png",
    to:"https://meek-cactus-83b378.netlify.app/",
  },
  {
    id: nanoid(),
    heading: "Project 2",
    description:
      "This is Movie application build with React-Native. We use Imdb API for rendering movie or show data on UI.  ",
    imgSrc: "/images/leno-shows.png",
    to:"https://leno-shows.vercel.app/",
  },
  {
    id: nanoid(),
    heading: "Project 3",
    description:
      "This is LinkedIn clone application build on React and Firebase that will allow to user login and posts on web.",
    imgSrc: "/images/LinkedIn-clone.png",
    to:"https://dazzling-gaufre-a093d8.netlify.app/",
  },
];

const Projects: FC = () => {
  

   const onClickHandler =(to:string)=>{
    window.open(to, "_blank");
      
   }
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
              onClick={()=>onClickHandler(item.to)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
