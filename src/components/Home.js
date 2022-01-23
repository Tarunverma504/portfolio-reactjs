import React,{useEffect} from "react";
import Typewriter from 'typewriter-effect';
// import skill from "../assets/skill.svg";
import profile_photo from "../assets/profile_photo.jpeg";
import "../style/home.css";
import Aos from "aos";

function Home(){
    useEffect(()=>{
        Aos.init({duration:2000});
      })
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-2">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{color:"#71f3dd"}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-center w-100">
                        <li className="nav-item ps-5" >
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ps-5">
                            <a className="nav-link active" href="#about">About</a>
                        </li>
                        <li className="nav-item ps-5">
                            <a className="nav-link active" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item ps-5">
                            <a className="nav-link active" href="#project_div">Projects</a>
                        </li>
                    </ul>
                    </div>

                </div>

            </nav>
            <div className="home_container">
                <div data-aos="fade-down" className="outer">
                    <div className="inner1">
                        <h1 >Hi There! <span className="wave">&#128075;&#127995; </span></h1>
                        <h1 >I'M <span style={{color:"#71f3dd"}}>Tarun Verma</span></h1>
                        <Typewriter options={{  
                            strings: ['Full Stack Developer', 'Programmer'], 
                            autoStart: true,  loop: true, 
                            }}
                            style={{color:"red"}}/>

                        <p><span><i className="fas fa-envelope" style={{color:"#71f3dd",marginTop:"20px"}}></i> &nbsp; vermatarun4305@gmail.com</span></p>
                        <p><span><i className="fas fa-map-marker-alt" style={{color: "#71f3dd"}}></i>&nbsp;&nbsp; Chandigarh, India</span></p>
                        <div className="icons">
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>

                        </div>
                    </div>
                    <div className="inner2">
                        <div className="img-outer">
                            <img src={profile_photo}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
