import React from "react";
import './header.css';
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import About from '../about/About';
import Experience from '../resume/Resume';
import Profile from '../profile/Profile';
import Service from '../services/Service';
import Skills from '../skills/Skills';
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";
import logo from './img/logo.png';

import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    // <section className="header-wrap">
    //   <div className="container">
    //     <div className="grid grid-cols-2 items-center">
    //       <div>
    //         <img src={logo} alt="logo" className="w-10 max-[600px]:w-6"/>
    //       </div>
    //       <div className="col-end-7">
    //         <button onClick={() => setOpen(!isOpen)} className={`hamburger-button ${isOpen ? "open" : "close"}`}/>
    //         <div className={`panel ${isOpen ? "open" : "close"}`}>
    //           <ul>
    //             <li><a href="About">About</a></li>
    //             <li><a href="#">Experience</a></li>
    //             <li><a href="#">Expertise</a></li>
    //             <li><a href="#">Skills</a></li>
    //             <li><a href="#">Portfolio</a></li>
    //             <li><a href="#">Contact</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Router className="header-wrap">
      <nav className="container pt-5">
        <div className="grid grid-cols-2 items-center">
          <div>
            <Link to="/Profile"><img src={logo} alt="logo" className="w-10 max-[600px]:w-6"/></Link>
          </div>
          <div className="col-end-7">
            <button onClick={() => setOpen(!isOpen)} className={`hamburger-button ${isOpen ? "open" : "close"}`}/>
            <div className={`panel ${isOpen ? "open" : "close"}`}>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/expertise">Expertise</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/Expertise" element={<Service />}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Footer />}/>
      </Routes>
    </Router>
  );
};

  export default Header;