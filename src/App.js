import React, {useState} from "react"
import "./styles/App.css"
// COMPONENTS
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import SecretMenu from "./components/SecretMenu";
// ROUTER
import {Switch, Route, useLocation} from "react-router-dom";
// ANIMATION
import {AnimatePresence} from "framer-motion"


function App() {
  

  const [nightIcon, setNightIcon] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);


  // ROUTER LOCATION
  const location = useLocation();
  

  return (
    <div className={nightIcon ? "App" : "light-App"}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Navbar nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <Hero nightIcon={nightIcon} />
            <SecretMenu nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          </Route>
          <Route path="/about" >
          <Navbar nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <About  nightIcon={nightIcon}/>
            <SecretMenu nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          </Route>
          <Route path="/projects">
          <Navbar nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <Projects nightIcon={nightIcon}/>
            <SecretMenu nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          </Route>
          <Route path="/contact">
          <Navbar nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <Contact nightIcon={nightIcon}/>
            <SecretMenu nightIcon={nightIcon} setNightIcon={setNightIcon} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
