import React from 'react'
import "../styles/hero.css"
import avatar from "../img/avatar.jpg"
// import Navbar from "./Navbar"
// ICONS
import {FiGithub, FiLinkedin,} from "react-icons/fi";
import {BsEnvelope} from "react-icons/bs";
import {RiCodeSSlashLine} from "react-icons/ri"
import {MdWork} from "react-icons/md";
// ROUTER
import {Link} from "react-router-dom";
// ANIMATIONS
import {motion} from "framer-motion"
import {pageAnimation} from "../components/Animations"

function Hero({nightIcon}) {
    return (
        
        <motion.div className={nightIcon ? "hero" : "light-hero"} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div className="avatar" initial={{x: -200, }} animate={{x:0 ,transition:{duration:1.5}}}>
                <motion.img src={avatar} alt="avatar" initial={{scale: 0}} animate={{scale: 1, transition: {duration:1}}}/>
            </motion.div>
            <motion.div className="hero-text" initial={{x: 300, }} animate={{x:0 ,transition:{duration:1.5}}}>
                <div className="hero-text-title" >
                    <h1>Welcome to my </h1>
                    <h1>personal portfolio</h1>
                </div>
                
                <div className="hero-text-par">
                    <p>My name is Panagiotis. I'm a web developer specializing on the front-end.</p>
                    <div className="hero-text-icons">
                       <a href="https://github.com/Panagiotis-Vasiloglou" rel="noreferrer" target="_blank"><FiGithub/></a>
                        <a href="https://www.linkedin.com/in/panagiotis-vasiloglou-999b791b0/" rel="noreferrer" target="_blank"><FiLinkedin/></a>
                        <a href="mailto: pvasiloglou@hotmail.com" rel="noreferrer" target="_blank"><BsEnvelope/></a>
                    </div>
                </div>
                    <div className="hero-text-btn">
                        <Link to="/about"><span>SEE MY SKILLS</span> <RiCodeSSlashLine/></Link>
                        <Link to="/projects"> <span>SEE MY PROJECTS</span> <MdWork/></Link>
                    </div>
            </motion.div>
            
        </motion.div>

    )
}

export default Hero
