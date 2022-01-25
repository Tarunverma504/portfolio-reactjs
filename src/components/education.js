import React,{useEffect} from "react";
import Aos from "aos";
import "../style/education.css";
function Education(){
    useEffect(()=>{
        Aos.init({duration:1000});
      })
    return(
        <>
            <div className="edu_container">
                <h1 style={{textDecoration:"underline",textDecorationColor:"white",color:"#0bceaf",textAlign:"center",fontSize:"45px"}}>Education</h1>
                <div className="edu_outer">
                    <div className="mid_div"> </div>
                    <div className="circle_div circle_1"></div>
                    <div className="line_div right_line_div line_1"></div>
                    <div data-aos="fade-left" className="school_1">
                        <h3>10th (CBSE Board)</h3>
                        <h5>Shishu Niketan Public School,Panchkula</h5>
                        <h6>2016-2017</h6>
                    </div>
                    <div className="circle_div circle_2"></div>
                    <div className="line_div left_line_div line_2"></div>
                    <div data-aos="fade-right" className="school_2">
                        <h3>12th (CBSE Board)</h3>
                        <h5>Govt. Model Senior Secondary School, Sector-16, Chandigarh</h5>
                        <h6>2018-2019</h6>
                    </div>
                    <div className="circle_div circle_3"></div>
                    <div className="line_div right_line_div line_3"></div>
                    <div data-aos="fade-left" className="school_3">
                        <h3>Bachelor of Engineering, CSE</h3>
                        <h5>Chitkara University, Rajpura</h5>
                        <h6>2019-Current Period</h6>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Education;