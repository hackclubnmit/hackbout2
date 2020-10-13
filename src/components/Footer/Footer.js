import React from 'react';
import { IconContext } from 'react-icons';
import { TiSocialInstagram } from 'react-icons/ti';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiHeart2Fill } from 'react-icons/ri';

import hackBout from '../../assets/HackBout.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="custom-shape-divider-top-1601424739">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer__image">&nbsp;</div>
      <div className="footer">
        <div className="footer__logo">
          <img src={hackBout} alt="HackBout-Logo" />
          <h1>HackBout</h1>
        </div>
        <div className="footer__sec-1">
          <h3>Sections</h3>
          <a href="#">Tracks</a>
          <a href="#">Schedule</a>
          <a href="#">Mentors</a>
          <a href="#">Sponsors</a>
        </div>
        <div className="footer__sec-2">
          <h3>Resources</h3>
          <a href="#">Sponsorship Brochure</a>
          <a href="#">Code of Conduct</a>
        </div>
        <div className="footer__sec-3">
          <h3>Contact Us</h3>
          <div className="social__links">
            <a href="" style={{ fontSize: '27px' }}>
              <IconContext.Provider value={{ title: 'Instagram-Link' }}>
                <TiSocialInstagram />
              </IconContext.Provider>
            </a>
            <a href="">
              <IconContext.Provider value={{ title: 'LinkedIn-Link' }}>
                <FaLinkedin />
              </IconContext.Provider>
            </a>
            <a href="">
              <IconContext.Provider value={{ title: 'Facebook-Link' }}>
                <FaFacebookF />
              </IconContext.Provider>
            </a>
            <a href="">
              <IconContext.Provider value={{ title: 'Github-Link' }}>
                <FaGithub />
              </IconContext.Provider>
            </a>
          </div>
          <div className="social__links-2">
            <a href="">
              <IconContext.Provider value={{ title: 'Email-Link' }}>
                <MdEmail />
              </IconContext.Provider>
            </a>
            <a href="">
              <IconContext.Provider value={{ title: 'Telegram-Link' }}>
                <FaTelegramPlane />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__end">
        Made with&nbsp;
        <IconContext.Provider
          value={{ color: 'rgb(255, 92, 187)', title: 'love' }}
        >
          <RiHeart2Fill />
        </IconContext.Provider>
        &nbsp; <span>HackClub NMIT</span>
      </div>
    </footer>
  );
};

export default Footer;
