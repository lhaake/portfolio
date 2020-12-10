import React from 'react'
import './About.css';
import Button from 'react-bootstrap/Button';
import resume from "../files/LeahHaake-Resume.pdf"
import biophoto from '../images/bio-photo.JPG';
import {FaReact, FaNode } from 'react-icons/fa'
import {SiJavascript, SiHtml5, SiRails, SiPostgresql, SiCss3, SiMongodb} from 'react-icons/si'
import {DiRuby} from "react-icons/di"


const About = () => {
    return (
        <>
        <div className="about-container">
                <h2>Leah Haake</h2>   
                <p>software engineer</p>  
        </div>
 
        <div className="tech"> 
            <p><SiHtml5 size="30px" /><br />HTML</p>
            <p><SiCss3 size="30px" /><br />CSS</p>
            <p><SiJavascript size="30px" /><br />Javascript</p>
            <p><FaReact size="30px" /><br />React</p>
            <p><FaNode size="30px" /><br />Node.js</p>
            <p><SiMongodb size="30px" /><br />MongoDB</p> 
            <p><SiPostgresql size="30px" /><br />Postgres</p>
            <p><DiRuby size="30px" /><br />Ruby</p>
            <p><SiRails size="30px" /><br />Ruby on Rails</p>
       
            {/* <div className="labels"> 
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Node</p>
            <p>Postgres</p>
            <p>Ruby</p>
            <p>Rails</p>
        </div> */}
        </div>

        <h1>about</h1>
        <div className="details">     
            <img src={biophoto} className="bio-image" alt="bio photo" />
            <p>I'm a motivated, detail oriented Software Engineer based in Maine. I'm enthusiastic about learning new technologies and I approach the web development process with creativity, curiousity and tenacity. I'm a graduate of General Assembly's Software Engineering Immersive program. My background is in public health and social justice.  I'm interested in finding technical solutions that make a positive impact. 
            <br /><br />
          
            <Button variant=""><a href={resume} target="_blank">Resume</a></Button>
            </p>
        </div>
    </>
    )
}
export default About
