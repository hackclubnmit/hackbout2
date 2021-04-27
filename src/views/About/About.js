import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

import './About.css';

const About = () => {
  useEffect(() => {
    const landImg = document.querySelectorAll('.hex');
    VanillaTilt.init(landImg, {
      glare: true,
      scale: 1.1,
    });
  }, []);

  return (
    <section id="about" className="about">
      <h1 className="about-heading">
        <span className="green">About</span> HackBout
      </h1>
      <div className="archive about-main">
        <div className="about__main">
          <p className="about_des des_main">
            For centuries humanity has enjoyed bouts in action-packed sports
            such as sword fighting and boxing, With the same intensity and
            competition, Nitte Meenakshi Institute of Technology presents
            HackBout, a 24 hour hackathon where teams will battle it out in
            electrifying competition, building their idea, improving it as they
            but in the spirit of good sportsmanship, having fun and making
            friends along the way.
          </p>
          <h2 className="about-sub_head">
            <span className="green">COVID</span> Update
          </h2>
          <p className="about_des">
            Due to the unprecedented pandemic at hand we have decided to host a
            Virtual event this year for the well-being of all the participants
            and the mentors.
          </p>
        </div>
        <div className="about_hex">
          <div className="hex img-1"></div>
          <div className="hex img-2"></div>
          <div className="hex img-3"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
