import React from 'react'
import './Footer.css';
import {FaLinkedinIn, FaGithub, FaEnvelope} from 'react-icons/fa'


const Footer = () => {
    return (
    <footer id="contact">
        <h1>contact</h1>
        
        <div class="icons">
            <a href="https://github.com/lhaake" target="_blank"><FaGithub size= "35px" /></a>

           <a href="https://www.linkedin.com/in/leah-haake/" target="_blank"><FaLinkedinIn size= "35px"  /></a>

            <a href="mailto:leahchaake@gmail.com"><FaEnvelope size= "35px" /></a>
        </div>
    </footer>
    )
}
export default Footer
