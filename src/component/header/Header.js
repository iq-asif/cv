import React from "react";
import './header.css';
import { useState } from "react";

function Header() {
    const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="header-wrap">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <img src="https://dummyimage.com/100x100" alt="logo" width={100}/>
          </div>
          <div className="col-end-7">
            <button onClick={() => setOpen(!isOpen)} className={`hamburger-button ${isOpen ? "open" : "close"}`}/>
            <div className={`panel ${isOpen ? "open" : "close"}`}>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Expertise</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

  export default Header;