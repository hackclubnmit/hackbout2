import React, { useState, useEffect } from "react";
import "./navbar.css";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <a href="/">Hackbout</a>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#tracks">Track</HashLink>
        <HashLink to="/#prizes">Prizes</HashLink>
        <HashLink to="/#mentors">Mentors</HashLink>
        <Link to="/team">Team</Link>
        <HashLink to="/#sponsors">Sponsors</HashLink>
        <HashLink to="/#faqs">Help</HashLink>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <span role="img" aria-label="">
          {" "}
          <i class="fas fa-bars"></i>{" "}
        </span>
      </button>
    </header>
  );
}
            // <header className='navbar'>
            
            // <div className='navbar__title'><a href="/">Hackbout</a></div>
            // <div className='navbar__item'></div>
            // <div className='navbar__item'></div>
            // <div className='navbar__item'></div>
            // <div className='navbar__item'></div>
            // <div className='navbar__item'></div>
            // <div className='navbar__item'></div>
            // <div className='navbar__item'></div>
               
            // </header>
