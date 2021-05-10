import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedin } from 'react-icons/fa';

import './MentorCards.css';

const MentorCards = (props) => {
  return (
    <figure
      class="mentor__card"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <img src={props.img} alt="profile background" class="background" />
      <img src={props.img} alt="profile" class="profile" />
      <figcaption>
        <h3>
          {props.name}
          <span>{props.occupation}</span>
        </h3>
        <div class="icons">
          <a href={props.linkedIn} target="_blank" rel="noreferrer noopener ">
            <IconContext.Provider value={{ title: 'LinkedIn-Link' }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
        </div>
      </figcaption>
    </figure>
  );
};

export default MentorCards;
