import React from "react";
import "../style/contact.css";
import contact from "../assets/contact.svg";
function Contact(){
    return (
        <>
            <div className="contact-container">
                <h1 style={{textDecoration:"underline",textDecorationColor:"white",textAlign:"center",color:"#0bceaf",fontSize:"50px"}}>Contact</h1>
                <div className="contact_outer">
                    <div className="contact_inner1">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="contact_inner2">
                        <textarea type="text" placeholder="Message"/>
                        <div className="contact-btn">
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="getintouch_div">
                    <h2>GET IN TOUCH</h2>
                    <div className="contact_icons">
                            <a href="https://github.com/Tarunverma504"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/tarun._verma/"><i className="fab fa-instagram"></i></a>

                        </div>
                </div>
               

            </div>
        </>
    )
}
export default Contact;