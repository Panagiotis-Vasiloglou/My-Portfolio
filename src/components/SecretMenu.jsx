import React from 'react'
import "../styles/SecretMenu.css"

// ROUTER
import {Link} from "react-router-dom"
// ANIMATION
import {motion} from "framer-motion"

function SecretMenu({openMenu, setOpenMenu}) {

    const closeMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <motion.div className={openMenu ? "show-menu": "hide-menu"} initial={{opacity:0}} animate={{opacity:1, transition: {duration: 2}}}>
            <nav className="show-menu-nav">
                <ul className="show-menu-ul">
                    <li className="show-menu-li"><Link onClick={closeMenu} to="/projects">Projects</Link></li>
                    <li className="show-menu-li"><Link onClick={closeMenu} to="/about">About</Link></li>
                    <li className="show-menu-li"><Link onClick={closeMenu} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </motion.div>
    )
}

export default SecretMenu
