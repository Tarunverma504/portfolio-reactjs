import React,{useEffect} from "react";
import "../style/project.css";
import Aos from "aos";

function Cards(props){
    useEffect(()=>{
        Aos.init({duration:2000});
      })
    return(
        <>
            <div  data-aos="zoom-in" className="card-outer">
                <h1 style={{marginTop:"100px"}}>{props.name}</h1>
                <div className="card-inner">
                    <h1 style={{fontSize:`${props.h1_size}`}}>{props.name}</h1>
                    <p style={{padding:`${props.p_padding}`}}>{props.content}</p>
                    <a href={props.live_link} className="btns btn1"><i class="fas fa-play"></i>&nbsp;&nbsp;Live Demo</a>
                    <a href={props.git_link} className="btns btn2" style={{padding:"5px 20px"}}><i class="fab fa-github"></i>&nbsp; Repo</a>
                </div>
            </div>
        </>
    )

}
export default Cards;