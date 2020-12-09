import React from 'react'
import './About.css';
import Button from 'react-bootstrap/Button';
import resume from "../files/LeahHaakeResume.pdf"
import biophoto from '../images/bio-photo.JPG';
import {FaReact, FaNode } from 'react-icons/fa'
import {SiJavascript, SiHtml5, SiRails, SiPostgresql, SiCss3} from 'react-icons/si'
import {DiRuby} from "react-icons/di"


const About = () => {
    return (
        <>
        <div className="about-container">
                <h2>Hi! I'm Leah Haake</h2>   
                <p>software engineer</p>  
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
            <p>I'm a motivated, detail oriented Software Engineer. I'm enthusiastic about learning new technologies and I approach the web development process with creativity, curiousity and tenacity. I'm a graduate of General Assembly's Software Engineering Immersive program.<br /><br />
            My background is in public health and social justice.  I'm interested in finding technical solutions that make a positive impact. 
            <br /><br />
            In my free time, I enjoy exploring the beautiful Maine coast.<br /><br />
            <Button variant=""><a href={resume} target="_blank">Resume</a></Button>
            </p>
        </div>
    </>
    )
}
export default About
