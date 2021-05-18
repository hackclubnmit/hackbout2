import React, { useState, useEffect } from "react";
import "./navbar.css";
import { CSSTransition } from "react-transition-group";

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
        <a href="#about">About</a>
        <a href="#tracks">Track</a>
        <a href="#prizes">Prizes</a>
        <a href="#mentors">Mentors</a>
        <a href="/team">Team</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#faqs">Help</a>
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
