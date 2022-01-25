import React,{useEffect} from "react";
import "../style/skills.css";
import Aos from "aos";
import Progress_bar from "./progress_bar";
function Skills(){
    useEffect(()=>{
        Aos.init({duration:2000});
      })
    return(
        <>
            <div className="skills_container">
                <div className="skills_outer">
                    <div  className="skills_inner1">
                        <h1 style={{textDecoration:"underline",textDecorationColor:"#0bceaf"}}>Technical Skills</h1>
                        <div className="skills_bar">
                            <div  data-aos="zoom-out" className="skill_wraper">
                               
                                <Progress_bar percentage="90"/>
                                <h4>HTML<i className="fab fa-html5" style={{color:"#E34C26",marginLeft: "10px", fontSize: "25px"}}></i></h4>
                            </div>
                            <div  data-aos="zoom-out"className="skill_wraper">
                                <Progress_bar percentage="80"/>
                                <h4>CSS<i className="fab fa-css3-alt" style={{color:"#264de4",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div   data-aos="zoom-out" className="skill_wraper">
                                <Progress_bar percentage="75"/>
                                <h4>JS<i className="fab fa-js" style={{color:"#e48d29",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div  data-aos="zoom-out" className="skill_wraper">
                                <Progress_bar percentage="50"/>
                                <h4>React-JS<i className="fab fa-react" style={{color:"#61dbfb",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div  data-aos="zoom-out" className="skill_wraper">
                                <Progress_bar percentage="65"/>
                                <h4>Node-JS<i className="fab fa-node" style={{color:"#68A063",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div data-aos="zoom-out" className="skill_wraper">
                                <Progress_bar percentage="75"/>
                                <h4>Mongo DB<i className="fas fa-database" style={{color:"grey",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div  data-aos="zoom-out"className="skill_wraper">
                                <Progress_bar percentage="70"/>
                                <h4>Sql / MySql<i className="fas fa-database" style={{color:"grey",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div   data-aos="zoom-out" className="skill_wraper">
                                 <Progress_bar percentage="65"/>
                                 <h4>JAVA<i className="fab fa-java" style={{color:"orange",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div  data-aos="zoom-out" className="skill_wraper">
                                <Progress_bar percentage="68"/>
                                <h4>c/c++<i className="fab fa-cuttlefish" style={{color:"#264de4",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            <div  data-aos="zoom-out" className="skill_wraper">
                                <Progress_bar percentage="85"/>
                                <h4>Bootstrap-4<i className="fab fa-bootstrap" style={{color:"#563d7c",marginLeft: "10px",fontSize: "25px"}}></i></h4>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;