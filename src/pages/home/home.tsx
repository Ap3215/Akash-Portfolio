import React from "react";
import Hero from "../../component/feature/hero/hero";
import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
