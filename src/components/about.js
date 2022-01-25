import React,{useEffect} from "react";
import about from "../assets/about_img.png";
import "../style/about.css";
import Aos from "aos";

function About(){
    useEffect(()=>{
        Aos.init({duration:2000});
      })
    return(
        <>
            <div className="About_container">
                <div className="about_outer">
                    <div data-aos="fade-right" className="about_inner1" style={{padding: "10px"}}>
                        <img src={about}style={{objectFit: "cover"}}/>
                    </div>
                    <div data-aos="fade-left" class="about_inner2">
                        <h1 style={{textAlign: "center", textDecoration: "underline", textDecorationColor:"#2a9b88"}}>About Me</h1>
                        <p style={{textAlign: "center",padding:"30px",fontSize: "20px",color: "rgba(240, 255, 255, 0.425)",marginBottom: "20px"}}>A passionate programmer , born  in India. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and mongo db as my tech stack. In am currently in 3rd of my Engineering with  specialization of 'Computer Science'. I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.</p>
                        <a href="#" className="cv_btn" >Download CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;