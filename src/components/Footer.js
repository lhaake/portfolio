import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import './Footer.css';
import {FaLinkedinIn, FaGithub, FaEnvelope} from 'react-icons/fa'
import {Form, Button} from "react-bootstrap"
import {motion} from "framer-motion"

const Footer = () => {

const emptyForm = {
      user_name: "",
      user_email: "",
      message: "",
    }
const [formData, setFormData] = useState(emptyForm)
const [msgsent, setmsgSent] = useState(false)

const thankyoumsg = "Your message has been sent. Thank you!"

const sendEmail = (e) => {
    e.preventDefault();


   emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

   setFormData(emptyForm)
   setmsgSent(true)
   
}

const handleChange = (event) => {
   setFormData({...formData, [event.target.name]: event.target.value })
}

return (
    <footer>
        <h1>contact</h1>
        <p>Let's connect! Fill out the contact form to get in touch!</p>
    { msgsent ? <h3>{thankyoumsg}</h3> : null   }    


    <Form className="contact-form" onSubmit={sendEmail}>

    <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="" value={formData.user_name} onChange={handleChange} />
    </Form.Group>
    <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="user_email" placeholder="" value={formData.user_email} onChange={handleChange}   />
    </Form.Group>
    <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
    </Form.Group>
    <Button variant="" type="submit" value="Send">
       Send
    </Button>
    </Form>
 
    <div class="icons">
        <motion.a whileHover={{ scale: 1.5}} href="https://github.com/lhaake" target="_blank"><FaGithub size= "35px" /></motion.a>

        <motion.a whileHover={{ scale: 1.5}} href="https://www.linkedin.com/in/leah-haake/" target="_blank"><FaLinkedinIn size= "35px"  /></motion.a>

        <motion.a whileHover={{ scale: 1.5}} href="mailto:leahchaake@gmail.com"><FaEnvelope size= "35px" /></motion.a>
    </div>
    </footer>
    )
}
export default Footer
