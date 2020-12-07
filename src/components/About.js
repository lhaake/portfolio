import React from 'react'
import './About.css';
import biophoto from '../images/bio-photo.JPG';
import {FaReact, FaNode } from 'react-icons/fa'
import {SiJavascript, SiHtml5, SiRails, SiPostgresql, SiCss3} from 'react-icons/si'
import {DiRuby} from "react-icons/di"


const About = () => {
    return (
        <>
        <h1>about</h1>
        <div className="about-container" id="about">
 
                <img src={biophoto} className="bio-image" alt="bio photo" />
                 <h2><span className="hello">Hi! I'm Leah Haake</span></h2>   
                <p>I'm a full stack web developer based in Maine.</p>
                {/* <p>Graduate of General Assembly’s Software Engineering Immersive program.</p> */}
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
            
         </>
    )
}
export default About
