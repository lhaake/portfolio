import React from 'react'
import './Footer.css';
import {FaLinkedinIn, FaGithub, FaEnvelope} from 'react-icons/fa'


const Footer = () => {
    return (
    <footer>
        <h1>contact</h1>
        <p>Send an  <a href="mailto:lchaake@gmail.com">email</a> or connect with me on LinkedIn</p>
        
        <div class="icons">
            <a href="https://github.com/lhaake" target="_blank"><FaGithub size= "35px" /></a>

           <a href="https://www.linkedin.com/in/leah-haake/" target="_blank"><FaLinkedinIn size= "35px"  /></a>

            <a href="mailto:leahchaake@gmail.com"><FaEnvelope size= "35px" /></a>
        </div>
    </footer>
    )
}
export default Footer
