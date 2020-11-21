import React from 'react'

import "../styles/About.css"
// IMAGES
import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import sass from "../img/sass.png"
import git from "../img/git.png"
import react from "../img/react.png"
// ANIMATIONS
import {motion} from "framer-motion"
import {pageAnimation} from "../components/Animations"



export default function About({nightIcon}) {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <div className={nightIcon ? "about" : "light-about"}>
            <div className="about-text">
                <motion.h1 initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 4}}}>Technologies I know</motion.h1>
                <motion.h1 initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 4.5}}}>And use some everyday</motion.h1>
                <p>I always try to learn and use the greatest, and most up
                to date technology out there. Check what I use daily</p>
            </div>
            <div className="about-img">
                <div className="row">
                    <li><img src={html} alt="html icon"/><h4>HTML</h4></li>
                    <li><img src={css} alt="css icon"/><h4>CSS</h4></li>
                    <li><img src={js} alt="JavaScript icon"/><h4>JAVASCRIPT</h4></li>
                </div>
                <div className="row">
                    <li><img src={sass} alt="sass icon"/><h4>SASS</h4></li>
                    <li><img src={react} alt="react icon"/><h4>REACT</h4></li>
                    <li><img src={git} alt="git icon"/><h4>GIT</h4></li>
                </div>
            </div>
        </div>
        </motion.div>  
    )
}
