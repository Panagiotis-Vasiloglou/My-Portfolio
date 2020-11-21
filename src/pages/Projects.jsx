import React from 'react'
import "../styles/Projects.css";

import portfolio from "../img/portfolio-screeshot.png";
import recipe from "../img/recipe-app-screeshot1.jpg";
import weather from "../img/weather-app-screenshot.png";
import codeminati from "../img/codeminati-screenshot.png";

// icons
import {ImEarth} from "react-icons/im";
import {HiCode} from "react-icons/hi"
// ANIMATIONS
import {motion} from "framer-motion"
import {pageAnimation} from "../components/Animations"

export default function Projects({nightIcon}) {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        
        <div className={nightIcon ? "projects" : "light-projects"}>
            <div className="projects-title">
                <motion.h1 initial={{y:50, opacity:0}} animate={{y:0, opacity:1, transition:{duration:2}}}>They say it's all about</motion.h1>
                <motion.h1 initial={{y:50, opacity:0}} animate={{y:0, opacity:1, transition:{duration:3}}}>the projects</motion.h1>
                <motion.h1 initial={{y:50, opacity:0}} animate={{y:0, opacity:1, transition:{duration:4}}}>See what I've done</motion.h1>
            </div>
            <div className="project-container">
                <div className="projects-photo">
                    <img src={weather} alt="project_photo"/>
                </div>
                <div className="project-text">
                    <div className="project-text-title">
                        <h1>Weather App</h1>
                    </div>
                    <div className="project-text-p">
                        <h6>Personal Project</h6>
                    </div>
                    <div className="skills">
                        <span className="skill">HTML</span>
                        <span className="skill">Css</span>
                        <span className="skill">Bootstrap</span>
                        <span className="skill">Javascript</span>
                        <span className="skill">Rest API</span>
                    </div>
                    <div className="project-description">
                        <h4>Challenges</h4>
                        <p>Weather App project had multiple challenges. I had to read and 
                            understand the documentation of OpenWeatherAPI so I could succesfully
                            send request from my code to their server. Also Weather App is using
                            Geolocation API which can find your location and then can send the right
                            request to OpenWeatherAPI... Emded that to my code was also challenging
                        </p>
                    </div>
                    <div className="direct">
                        <h6>Check my code to Github and see user's benefitial by using this App</h6>
                    </div>
                    <div className="project-links">
                        <a className="link1" href="https://happy-yonath-d03239.netlify.app/" rel="noreferrer" target="_blank"><span>DEMO</span> <ImEarth/></a>
                        <a className="link2" href="https://github.com/Panagiotis-Vasiloglou/Weather-App" rel="noreferrer" target="_blank"><span>CODE</span><HiCode/></a> 
                    </div>
                </div>
              </div>
            <div className="project-container">
                <div className="projects-photo">
                    <img src={portfolio} alt="project_photo"/>
                </div>
                <div className="project-text">
                    <div className="project-text-title">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="project-text-p">
                        <h6>Personal Project</h6>
                    </div>
                    <div className="skills">
                        <span className="skill">HTML</span>
                        <span className="skill">Css</span>
                        <span className="skill">Javascript</span>
                        <span className="skill">React</span>
                        <span className="skill">React Router</span>
                        <span className="skill">Framer Motion</span>
                    </div>
                    <div className="project-description">
                        <h4>Challenges</h4>
                        <p>Making my personal portfolio was enough challenging. I had to embed to
                            my code the React Router to update components like app-feeling. Styling(CSS) was also
                            very hard. Finally I had to study the Framer Motion library and animate my portfolio in the proper way.
                        </p>
                    </div>
                 
                    <div className="project-links">
                        <span>DEMO</span> <ImEarth/>
                        <a className="link2" href="https://github.com/Panagiotis-Vasiloglou/React-Portfolio" rel="noreferrer" target="_blank"><span>CODE</span> <HiCode/></a>
                    </div>
                </div>
              </div>
            <div className="project-container">
                <div className="projects-photo">
                    <img src={recipe} alt="project_photo"/>
                </div>
                <div className="project-text">
                    <div className="project-text-title">
                        <h1>Recipe App</h1>
                    </div>
                    <div className="project-text-p">
                        <h6>Personal Project</h6>
                    </div>
                    <div className="skills">
                        <span className="skill">HTML</span>
                        <span className="skill">Css</span>
                        <span className="skill">Javascript</span>
                        <span className="skill">React</span>
                        <span className="skill">Rest API</span>
                    </div>
                    <div className="project-description">
                        <h4>Challenges</h4>
                        <p>In the Recipe App by far the hardest part was to read and understand the REST API  documentation that 
                            I am using, literally their server won't send me the correct response if my request was not "perfect". And
                            making my request perfect was challenging enough!
                        </p>
                    </div>
                    <div className="direct">
                        <h6>Check my code to Github and see user's benefitial by using this App</h6>
                    </div>
                    <div className="project-links">
                         <a className="link1" href="https://nervous-cori-1331b3.netlify.app/" rel="noreferrer" target="_blank"><span>DEMO</span> <ImEarth/></a>
                        <a className="link2" href="https://github.com/Panagiotis-Vasiloglou/React-Recipe-App" rel="noreferrer" target="_blank"><span>CODE</span> <HiCode/></a>
                    </div>
                </div>
              </div>
            <div className="project-container">
                <div className="projects-photo">
                    <img src={codeminati} alt="project_photo"/>
                </div>
                <div className="project-text">
                    <div className="project-text-title">
                        <h1>Codeminati Website</h1>
                    </div>
                    <div className="project-text-p">
                        <h6>Personal Project</h6>
                    </div>
                    <div className="skills">
                        <span className="skill">HTML</span>
                        <span className="skill">Css</span>
                        <span className="skill">Javascript</span>
                        <span className="skill">Bootstrap</span>
                    </div>
                    <div className="project-description">
                        <h4>Challenges</h4>
                        <p>Codeminati Website was made by me and my colleagues. A bit challenging was my part for
                            finding the layout of the page and color etc. I was dive into design principles and try
                            to make something beautiful by embed them to my code.
                        </p>
                    </div>
                    <div className="direct">
                        <h6>Check my code to Github and see user's benefitial by using this website</h6>
                    </div>
                    <div className="project-links">
                        <a className="link1" href="http://www.codeminati.gr/" rel="noreferrer" target="_blank"><span>DEMO</span> <ImEarth/></a>
                        <a className="link2" href="https://github.com/Panagiotis-Vasiloglou/Codeminati-Website" rel="noreferrer" target="_blank"><span>CODE</span> <HiCode/></a>
                    </div>
                </div>
              </div>
            </div>
        </motion.div>
    )
}
