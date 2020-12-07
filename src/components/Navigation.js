import React from "react"
import {Navbar, Nav} from 'react-bootstrap'
import './Nav.css';

const Navigation = () => {
 
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="title-nav">Leah Haake</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
  
        <Nav.Link><a href="#about">About</a></Nav.Link>
        <Nav.Link><a href="#projects">Projects</a></Nav.Link>
        <Nav.Link><a href="#contact">Contact</a></Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar> 
  </>
  )
}

export default Navigation;