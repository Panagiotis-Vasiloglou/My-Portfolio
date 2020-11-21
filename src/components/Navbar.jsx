import React from 'react'
import logo from "../img/logo1.png"
import lightLogo from "../img/logo.png"
import "../styles/Navbar.css"
// ICONS
import {FiSun, FiMoon} from "react-icons/fi";
// ROUTER
import {Link} from "react-router-dom";





function Navbar({openMenu, setOpenMenu, nightIcon, setNightIcon}) {
    
    // state
    

    // functions

    const iconChange = () => {
        setNightIcon(!nightIcon);
    }

    const menuChange = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div>
      <nav className={nightIcon ? "nav" : "nav-light"}>
          <ul className="nav-ul">
              <div className="logo">
                  <Link to="/"><img src={nightIcon ? logo : lightLogo} alt="logo"/></Link>
              </div>
              <li className="nav-li"><Link to="/projects">Projects</Link></li >
              <li className="nav-li"><Link to="/about">About</Link></li >
              <li className="nav-li"><Link to="/contact">Contact</Link></li >
              <div onClick={iconChange} className="icon">
                  {nightIcon? <FiSun className="sun"/> : <FiMoon className="night"/>}
                
              </div>
              <div onClick={menuChange} className={openMenu ? "menu-btn open" : "menu-btn"}>
                <div  className="burger"></div>
              </div>
              
          </ul>
      </nav>
      </div>
    )
}

export default Navbar;