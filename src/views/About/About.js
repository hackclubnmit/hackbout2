import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

import './About.css';

const About = () => {
  useEffect(() => {
    if (window.innerWidth > 700) {
      const landImg = document.querySelectorAll('.hex');
      VanillaTilt.init(landImg, {
        glare: true,
        scale: 1.1,
      });
    }
  }, []);

  return (
    <section id="about" className="about">
      <h1
        className="about-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        <span className="green">About</span> HackBout
      </h1>
      <div className="archive about-main">
        <div className="about__main">
          <p
            className="about_des des_main"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            HackClub NMIT presents HackBout, one of the largest student
            organized hackathon in Bangalore. HackBout aims to bring talented
            individuals be it student or professional, to compete over 24 hours
            and develop innovative solutions to real world problems and provide
            a friendly yet competitive environment where teams can bring out the
            best in themselves. We want you to meet more like minded people and
            introduce you to industry experts who can help and guide you along
            the way.
          </p>
          <p
            className="about_des des_main"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            With over 50 teams and 15 mentors in our second iteration, this year
            we return to conduct a hackathon bigger than ever.
          </p>
          {/* <h2 className="about-sub_head" data-aos={'fade-up'}>
            <span className="green">COVID</span> Update
          </h2>
          <p className="about_des" data-aos={'fade-up'}>
            Due to the unprecedented pandemic at hand we have decided to host a
            Virtual event this year for the well-being of all the participants
            and the mentors.
          </p> */}
        </div>
        <div className="about_hex">
          <div
            className="hex img-1"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
          ></div>
          <div
            className="hex img-2"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease"
          ></div>
          <div
            className="hex img-3"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
