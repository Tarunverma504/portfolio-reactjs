import React,{useEffect} from "react";
import './App.css';
import Particle_div from "./Particle_div";
//import Particles from "react-tsparticles";
import Aos from "aos";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/skills";
import "aos/dist/aos.css";
function App() {
  
  return (
    <>
      <Particle_div/>
      <Home />
      <About/>
      <Skills/>
    </>
  );
}

export default App;
