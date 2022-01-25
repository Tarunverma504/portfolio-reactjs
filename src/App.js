import React from "react";
import './App.css';
import Particle_div from "./Particle_div";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/skills";
import Education from "./components/education";
import "aos/dist/aos.css";
function App() {
  
  return (
    <>
      <Particle_div/>
      <Home />
      <About/>
      <Skills/>
      <Education/>
    </>
  );
}

export default App;
