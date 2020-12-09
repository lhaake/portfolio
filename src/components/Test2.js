import React from 'react'
import './Test2.css';
import Button from 'react-bootstrap/Button';
import resume from "../files/LeahHaakeResume.pdf"
import biophoto from '../images/bio-photo.JPG';
import {FaReact, FaNode } from 'react-icons/fa'
import {SiJavascript, SiHtml5, SiRails, SiPostgresql, SiCss3} from 'react-icons/si'
import {DiRuby} from "react-icons/di"


const Test2 = () => {
    return (
        <>
        <h1>about</h1> 
        <div className="test2-container">
            
            <div className="test2-col1"> 
               
            <img src={biophoto} className="image" alt="bio photo" />
            </div>

            <div className="test2-col2">
            <p>I'm a motivated, detail oriented Software Engineer based in Maine. </p> 
            <p>I'm a graduate of General Assembly’s Software Engineering Immersive program.</p> <p>I'm enthusiastic about learning new technologies and using my creativity, curiousity and tenacity to build web applications.</p> 
            <p>My background is in public health and social justice, which drives my interest in finding technical solutions that make a positive impact.</p>
            <p>In my free time, I enjoy hiking and exploring the beautiful Maine coast.</p> <br />
             <Button variant=""><a href={resume} target="_blank">Resume</a></Button>
               
            </div>

        </div>
        </>
    )
}
export default Test2