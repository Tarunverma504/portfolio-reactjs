import React from "react";
import "../style/project.css"
function Cards(props){
    return(
        <>
            <div className="card-outer">
                <h1 style={{marginTop:"100px"}}>{props.name}</h1>
                <div className="card-inner">
                    <h1 style={{fontSize:`${props.h1_size}`}}>{props.name}</h1>
                    <p style={{padding:`${props.p_padding}`}}>{props.content}</p>
                    <a href={props.live_link} className="btns btn1"><i class="fas fa-play"></i>&nbsp;&nbsp;Live Demo</a>
                    <a href={props.git_link} className="btns btn2"><i class="fab fa-github"></i>&nbsp; Repo</a>
                </div>
            </div>
        </>
    )

}
export default Cards;