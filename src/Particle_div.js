import React,{useEffect} from "react";
import Particle from "react-tsparticles";
import './App.css';
import Aos from "aos";

function Particle_div(){
    return(
        <>
            <Particle 
            className="particles-wrapper"
                 canvasClassName="c"
      id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
      options={{
        background: {
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#0bceaf",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 55,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "polygon",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        </>
    )
}

export default Particle_div;
