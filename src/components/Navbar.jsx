import React from "react";
// import Resume from '../../static/ChloeNgResume.pdf';
import { useState } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

    // Changing "active" class to active page
    const location = useLocation()
    const activePage = location.pathname;

    // Responsive Navbar (media query)
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    //Navbar Scrolls Up
    const [navBar, setNavbar] = useState(false);
    const scrollNav = () => {
        if (window.scrollY  >= 180) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollNav);

    return (
        <header>
            <nav ref={navRef} className={navBar ? "active" : ""}> 
                <button className="nav-btn nav-close" onClick={showNavbar}> close </button>

                <a href="/" className={activePage === '/' ? 'active' : ''}> Home </a>
                <a href="/experience" className={activePage === '/experience' ? 'active' : ''}> Experience </a>
                <a href="" target='_blank' rel="noreferrer"> Resume </a>
                                
            </nav>

            <button className="nav-btn nav-menu" onClick={showNavbar}> open </button>
            
        </header>
    );
}

export default Navbar;