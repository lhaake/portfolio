import React from 'react'
import './About.css';
import Button from 'react-bootstrap/Button';
import resume from "../files/Leah-Haake-Resume.pdf"
import biophoto from '../images/bio-photo.JPG';
import {FaReact, FaNode } from 'react-icons/fa'
import {SiJavascript, SiHtml5, SiRails, SiPostgresql, SiCss3} from 'react-icons/si'
import {DiRuby} from "react-icons/di"


const About = () => {
    return (
        <>
        
        <div className="about-container">
             
                <h2>Hi! I'm Leah Haake</h2>   
                <p>Full Stack Web Developer</p>  
        </div>

            <div className="tech"> 
                <SiHtml5 size="30px" />
                <SiCss3 size="30px" />
                <SiJavascript size="30px" />
                <FaReact size="30px" />
                <FaNode size="40px" />
                <SiPostgresql size="30px" />
                <DiRuby size="30px" />
                <SiRails size="40px" />
            </div>

            <h1>about</h1>
            <div className="details">
             
            <img src={biophoto} className="bio-image" alt="bio photo" />
            
             <p>I'm a motivated, detail oriented Full Stack Web Developer based in Maine. My background in public health drives my interest in finding technical solutions that make a positive impact. I'm a graduate of General Assembly’s Software Engineering Immersive program. I'm enthusiastic about learning and developing my technical skills. When I'm not coding, I enjoy running, visiting local cafes and bakeries, and exploring the beautiful Maine coast. <br />
            <Button variant=""><a href={resume} target="_blank">Resume</a></Button>
                 
            </p> 
          </div>
         </>
    )
}
export default About
