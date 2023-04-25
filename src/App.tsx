import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/layout/header/header";
import Footer from "./component/layout/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
