import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dailynews from '../images/dailynews.png';
import tunr from '../images/tunr.png';
import palate from '../images/palate.png';
import mtl from '../images/mtl.png';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-header" id="projects">
            <h1>projects</h1>
       
             <div className="projects-container">
            <Card style={{ width: '18rem' }}>
            <a href="https://lhaake-news-app.netlify.app/" target="_blank"><Card.Img variant="top" src={dailynews} className="daily-news-image" /></a>
            <Card.Body>
                <Card.Title>Daily News</Card.Title>
                <Card.Text>
                React web app using a 3rd party API that allows users to search for news articles by keyword, and select articles as favorites.
                </Card.Text>
                <Button variant=""><a href="https://lhaake-news-app.netlify.app/" target="_blank">Code</a></Button>
                <Button variant=""><a href="https://lhaake-news-app.netlify.app/" target="_blank">Link</a></Button>
            </Card.Body>
            </Card>

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

            <Card style={{ width: '18rem' }}>
            <a href="https://tunr-lhaake.netlify.app/" target="_blank"><Card.Img variant="top" src={tunr} className="tunr-image" /></a>
            <Card.Body>
                <Card.Title>TUNR.</Card.Title>
                <Card.Text>
                 Full stack web app for adding songs to a playlist and select favorite songs. React|Rails|Postgres
                </Card.Text>
                 <Button variant=""><a href="https://github.com/lhaake/tunr-rails-app-frontend" target="_blank">Code</a></Button>
                <Button variant=""><a href="https://tunr-lhaake.netlify.app/" target="_blank">Link</a></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <a href="https://lhaake-unit4proj.netlify.app/" target="_blank"><Card.Img variant="top" src={mtl} className="mytraininglog-image" /></a>
            <Card.Body>
                <Card.Title>My Training Log</Card.Title>
                <Card.Text>
                Capstone. Full stack web app for users to log their workouts in a digital journal, specifying: title, sport, date, time, distance, description, exertion, and more. React|Rails|Postgres|JWT
                </Card.Text>
                <Button variant=""><a href="https://github.com/lhaake/unit4-proj-frontend" target="_blank">Code</a></Button>
                <Button variant=""><a href="https://lhaake-unit4proj.netlify.app/" target="_blank">Link</a></Button>
            </Card.Body>
            </Card>


 </div>
 </div>
    )
}

export default Projects


//     <div className="projects-header">
    //         <h1>PROJECTS</h1>
        
    //     <div className="projects-container">
    //         <div className="cards">
    //         <Frame whileHover={{ scale: 0.90}} transition={{ duration: 0.75 }}>
    //         <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src={dailynews} className="daily-news-image" />
    //         <Card.Body>
    //             <Card.Title>Daily News</Card.Title>
    //             <Card.Text>
    //             Daily News is a React application using a 3rd party API that allows users to search for news articles by keyword, and select articles as favorites. 
    //             </Card.Text>
    //             <Button variant=""><a href="https://lhaake-news-app.netlify.app/" target="_blank">Check it out</a></Button>
    //         </Card.Body>
    //         </Card>
    //         </Frame>
    //         </div> 

    //          <div className="cards">
    //         <Frame whileHover={{ scale: 0.90 }}>
    //         <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src={palate} className="palate-image" />
    //         <Card.Body>
    //             <Card.Title>PALATE</Card.Title>
    //             <Card.Text>
    //             PALATE is a full stack application (React, Express, MongoDB) for rating specific items on a restaurant menu. As a group project, I worked on building the API on the backend and implementation of the CRUD functionality on the front end. 
    //             </Card.Text>
    //             <Button variant=""><a href="https://palateapp.netlify.app/" target="_blank">See the app</a></Button>
    //         </Card.Body>
    //         </Card>
    //         </Frame>
    //         </div>

    //          <div className="cards">
    //         <Frame whileHover={{ scale: 0.90 }}>
            // <Card style={{ width: '18rem' }}>
            // <Card.Img variant="top" src={tunr} className="tunr-image" />
            // <Card.Body>
            //     <Card.Title>TUNR.</Card.Title>
            //     <Card.Text>
            //         TUNR is a full stack application built with React, Ruby on Rails and Postgres, for creating a playlist with favorite songs. Users can add, edit, favorite and delete songs.
            //     </Card.Text>
            //     <Button variant=""><a href="https://tunr-lhaake.netlify.app/" target="_blank">Check it out</a></Button>
            // </Card.Body>
            // </Card>
    //         </Frame>
    //         </div>

    //          <div className="cards">
    //         <Frame whileHover={{ scale: 0.90 }}>
            // <Card style={{ width: '18rem' }}>
            // <Card.Img variant="top" src={mtl} className="mytraininglog-image" />
            // <Card.Body>
            //     <Card.Title>My Training Log</Card.Title>
            //     <Card.Text>
            //     My Training Log is a full stack application (React, Rails, Postgresql, Auth (JWT), React Bootstrap) built for a user to log their workouts and to be able to revisit their saved workouts - sorted by date and to search by title.
            //     </Card.Text>
            //     <Button variant=""><a href="https://lhaake-unit4proj.netlify.app/" target="_blank">See the app</a></Button>
            // </Card.Body>
            // </Card>
    //         </Frame>
    //         </div>
    //     </div>
    // </div>