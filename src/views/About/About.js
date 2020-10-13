import React from 'react';

import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="about-heading">About HackBout</h1>
      <div className="archive about-main">
        <div>
          <p className="about_des des_main">
            For centuries humanity has enjoyed bouts in action-packed sports
            such as sword fighting and boxing, With the same intensity and
            competition, Nitte Meenakshi Institute of Technology presents
            HackBout, a 24 hour hackathon where teams will battle it out in
            electrifying competition, building their idea, improving it as they
            but in the spirit of good sportsmanship, having fun and making
            friends along the way.
          </p>
          <h2 className="about-sub_head">COVID - 19 Update</h2>
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
      <div className="row-about">
        <div>
          <svg
            preserveAspectRatio="xMidYMax meet"
            className="svg-separator sep1"
            viewBox="0 0 1600 100"
            data-height={100}
          >
            <path
              d="M1040 56h1.6c-16.6-8.9-36.4-15.7-66.4-15.7-56 0-76.8 23.7-106.9 41 12.8 8 27.3 14.7 51.7 14.7 59.5 0 60-40 120-40zM1699.8 96v10H1946l-.3-6.9h-88c-88 0-88.6-58.8-176.5-58.8-51.4 0-73 20.1-99.6 36.8 14.5 9.6 29.6 18.9 58.4 18.9h59.8zM1400 96c19.5 0 32.7-4.3 43.7-10-35.2-17.3-54.1-45.7-115.5-45.7-32.3 0-52.8 7.9-70.2 17.8 6.4-1.3 13.6-2.1 22-2.1 60.1 0 60.3 40 120 40zM320 56c6.6 0 12.4.5 17.7 1.3-17-9.6-37.3-17-68.5-17-60.4 0-79.5 27.8-114 45.2 11.2 6 24.6 10.5 44.8 10.5 60 0 59.9-40 120-40zM680 96c23.7 0 38.1-6.3 50.5-13.9-30.9-17.3-51.5-41.8-108.3-41.8-30 0-49.8 6.8-66.3 15.8 1.3 0 2.7-.1 4.1-.1 59.7 0 60.2 40 120 40zM-40 95.6c28.3 0 43.3-8.7 57.4-18C-9.6 60.8-31 40.2-83.2 40.2c-14.3 0-26.3 1.6-36.8 4.2V106h60V96l20-.4z"
              fill="#1fa066"
            />
            <path
              d="M504 73.4c-2.6-.8-5.7-1.4-9.6-1.4-19.4 0-19.6 13-39 13s-19.5-13-39-13c-14 0-18 6.7-26.3 10.4C402.4 89.9 416.7 96 440 96c32.5 0 47.5-11.8 64-22.6zM1205.4 85h-.6c-19.5 0-19.5-13-39-13s-19.4 12.9-39 12.9c0 0-5.9 0-12.3.1 11.4 6.3 24.9 11 45.5 11s34.1-4.8 45.4-11zM1447.4 83.9c-2.4.7-5.2 1.1-8.6 1.1-19.3 0-19.6-13-39-13s-19.6 13-39 13c-3 0-5.5-.3-7.7-.8 11.6 6.6 25.4 11.8 46.9 11.8 21.8 0 35.7-5.3 47.4-12.1zM985.8 72c-17.6.8-18.3 13-37 13-19.4 0-19.5-13-39-13-18.2 0-19.6 11.4-35.5 12.8 11.4 6.3 25 11.2 45.7 11.2 33.7 0 48.5-12.8 65.8-24zM743.8 73.5c-10.3 3.4-13.6 11.5-29 11.5-19.4 0-19.5-13-39-13s-19.5 13-39 13c-.9 0-1.7 0-2.5-.1 11.4 6.3 25 11.1 45.7 11.1 32.4 0 47.3-11.8 63.8-22.5zM265.5 72.3c-1.5-.2-3.2-.3-5.1-.3-19.4 0-19.6 13-39 13s-19.6-13-39-13c-15.9 0-18.9 8.7-30.1 11.9C164.1 90.6 178 96 200 96c33.7 0 48.4-12.6 65.5-23.7zM1692.3 96V85h-19.5c-19.5 0-19.6-13-39-13s-19.6 13-39 13h-.4c11.4 6.2 24.9 11 45.6 11h52.3zM25.5 72C6 72 6.1 84.9-13.5 84.9l-6.5.1v8.9C.7 90.1 12.6 80.6 25.9 72h-.4z"
              fill="#1b8a59"
            />
            <path
              d="M-40 95.6C20.3 95.6 20.1 56 80 56s60 40 120 40 59.9-40 120-40 60.3 40 120 40 60.3-40 120-40 60.2 40 120 40 60.1-40 120-40 60.5 40 120 40 60-40 120-40 60.4 40 120 40 59.9-40 120-40 60.3 40 120 40 60.2-40 120-40 60.2 40 120 40h59.8l.2 143H-60V96l20-.4z"
              fill="#23b574"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
