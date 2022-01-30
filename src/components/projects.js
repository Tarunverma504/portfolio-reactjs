import React,{useEffect} from "react";
import "../style/project.css";
import Cards from "./cards";   
import Aos from "aos";

function Projects(){
    useEffect(()=>{
        Aos.init({duration:2000});
      })
    return(
        <>
            <div  className="project-container">
                <h1 className="div-heading" style={{fontSize:"50px",marginTop:"20px",marginBottom:"20px"}}>Projects</h1>
                <div className="project-outer">
                    <Cards   h1_size="35px" live_link="https://dot-blog.netlify.app/" git_link="https://github.com/Tarunverma504/.blog" p_padding="10px" name=".blog" content="This web app is the kind of platform where user can write and publish there own blog and read the blogs of other users. User can also upload images with there perspective blogs. User can also modify or delete his/her blog anytime. User can also comment on  blog if he/she like too. User based flows is implemented." />
                    <Cards h1_size="45px" live_link="https://sukoon.netlify.app" git_link="https://github.com/Tarunverma504/sukoon-musicapp-reactjs" p_padding="15px" name="Sukoon" content="Sukoon is basically music web app developed in react js and integrated with spotify api.In this web app you can listen songs online and best part is you can play playlist/songs according to weather of your city."/>
                    <Cards h1_size="35px" live_link="https://password-management-system-web.herokuapp.com/" git_link="https://github.com/Tarunverma504/Password-Management-System-nodeJs" p_padding="5px"  name="Password Manager" content="In the Password Manager you can save and manage your password. It is secured with bycrypt and cryptr. Using this application you can access your password anytime anywhere. This application is developed in node js using template Engine and mongo db for cloud and backend."/>
                    <Cards h1_size="45px" live_link="https://todo-app-t.herokuapp.com/" git_link="https://github.com/Tarunverma504/Todo-web-app-NodeJs" p_padding="10px"  name="Todo-web-app" content="In this apllication you can create and save your notes . It save your notes online so that you can access it anywhere.This application is developed in node js using template Engine and mongo db for cloud and backend." />
                    <Cards h1_size="55px" live_link="https://tarunverma504.github.io/Meal-Finder/" git_link="https://github.com/Tarunverma504/Meal-Finder" p_padding="35px" name="Meal-Finder" content="By using meal finder application you can search for any food recipe. and it also contains video links related to specific recipe." />
                    <Cards h1_size="40px" live_link="https://tarunverma504.github.io/Hangman-Game-Js/" git_link="https://github.com/Tarunverma504/Hangman-Game-Js" p_padding="35px" name="Hangman-Game" content="It's Hangman Game application created using basic html css and javascript. This had preety much fun. You must have to check this one." />
                </div>
            </div>
        </>
    )

}
export default Projects;