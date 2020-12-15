import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dailynews from '../images/dailynews.png';
import tunr from '../images/tunr.png';
import palate from '../images/palate.png';
import mtl from '../images/mtl.png';
import './Projects.css';
import {motion} from "framer-motion"

const Projects = () => {
    return (
        <div className="projects-header">
            <h1>projects</h1>
            <p className="projects-intro">I built the following projects from September - November 2020 while a student in General Assembly's Software Engineering Immersive program. Find the GitHub repos and live links below.</p>
            
            <div className="projects-container">

                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
                <Card style={{ width: '18rem' }}>
                <a href="https://lhaake-unit4proj.netlify.app/" target="_blank"><Card.Img variant="top" src={mtl} className="mytraininglog-image" /></a>
                <Card.Body>
                    <Card.Title>My Training Log</Card.Title>
                    <Card.Text>
                    Capstone. Full stack web app for users to log their workouts in a digital training log specifying: title, sport, date, time, distance, description, exertion, and more. React|Rails|Postgres|JWT
                    </Card.Text>
                    <Button variant=""><a href="https://github.com/lhaake/unit4-proj-frontend" target="_blank">Code</a></Button>
                    <Button variant=""><a href="https://lhaake-unit4proj.netlify.app/" target="_blank">Link</a></Button>
                    <Button variant=""><a href="https://youtu.be/YhMWm5Jp8fQ" target="_blank">Video</a></Button>
                </Card.Body>
                </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
                <Card style={{ width: '18rem' }}>
                <a href="https://tunr-lhaake.netlify.app/" target="_blank"><Card.Img variant="top" src={tunr} className="tunr-image" /></a>
                <Card.Body>
                    <Card.Title>TUNR.</Card.Title>
                    <Card.Text>
                    Full stack web app for adding songs to a playlist and selecting favorite songs. React|Rails|Postgres
                    </Card.Text>
                    <Button variant=""><a href="https://github.com/lhaake/tunr-rails-app-frontend" target="_blank">Code</a></Button>
                    <Button variant=""><a href="https://tunr-lhaake.netlify.app/" target="_blank">Link</a></Button>
                </Card.Body>
                </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
                <Card style={{ width: '18rem' }}>
                <a href="https://palateapp.netlify.app/" target="_blank"><Card.Img variant="top" src={palate} className="palate-image" /></a>
                <Card.Body>
                <Card.Title>PALATE</Card.Title>
                <Card.Text>
                Group project. MERN full stack web app for rating and reviewing items on a restaurant menu. 
            
                MongoDB|Express|React|Node
                </Card.Text>
                <Button variant=""><a href="https://github.com/adeola-ak/palatefrontend" target="_blank">Code</a></Button>
                <Button variant=""><a href="https://palateapp.netlify.app/" target="_blank">Link</a></Button>
                </Card.Body>
                </Card>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
                <Card style={{ width: '18rem' }}>
                
                <a href="https://lhaake-news-app.netlify.app/" target="_blank"><Card.Img variant="top" src={dailynews} className="daily-news-image" /></a>
                <Card.Body>
                    <Card.Title>Daily News</Card.Title>
                    <Card.Text>
                    React web app using a 3rd party API that allows users to search for news articles by keyword and select articles as favorites.
                    </Card.Text>
                    <Button variant=""><a href="https://lhaake-news-app.netlify.app/" target="_blank">Code</a></Button>
                    <Button variant=""><a href="https://lhaake-news-app.netlify.app/" target="_blank">Link</a></Button>
                </Card.Body> 
                </Card>
                </motion.div>
        </div>
    </div>
    )
}

export default Projects
