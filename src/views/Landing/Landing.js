import React from 'react';

import HackBout from '../../assets/HackBout.svg';
import './Landing.css';

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <article className="landing__container">
        <div className="landing__sub-1">
          <h1 className="landing__heading">HACKBOUT</h1>
          <h2 className="landing__sub-heading">
            A <strong>Hack Club NMIT's</strong> Hackathon
          </h2>
          <h2 className="landing__sub-heading">24th-25th April</h2>
          <h4 className="landing__sub-heading-2">
            Registrations opening soon!
          </h4>
          <a
            href="https://forms.gle/1bQ9b9TKh1hyX4F58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="landing__btn">Notify Me!</button>
          </a>
        </div>
        <div className="landing__sub-2">
          <img src={HackBout} alt="hackbout-logo" className="landing__logo" />
        </div>
      </article>
      <div className="svg-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Landing;
