import React from 'react';
import { IconContext } from 'react-icons';
import { TiSocialInstagram } from 'react-icons/ti';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiHeart2Fill } from 'react-icons/ri';

import hackBout from '../../assets/HackBout.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="custom-shape-divider-top-1619379941">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
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
        <div className="footer__sections">
          <div className="footer__sec-1">
            <h3>Sections</h3>
            <a
              href="#tracks"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.tracks').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Tracks
            </a>
            {/* <a href="#">Schedule</a> */}
            {/* <a href="#mentors">Mentors</a> */}
            <a
              href="#sponsors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.sponsors').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Sponsors
            </a>
          </div>
          <div className="footer__sec-2">
            <h3>Resources</h3>
            <a
              href="https://drive.google.com/file/d/1P1LMcvudLiWL0nBSIvKOLU7i3EKAcKA4/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener "
            >
              Sponsorship Brochure
            </a>
            <a
              href="https://devfolio.co/code-of-conduct"
              target="_blank"
              rel="noreferrer noopener "
            >
              Code of Conduct
            </a>
          </div>
          <div className="footer__sec-3">
            <h3>Contact Us</h3>
            <div className="social__links">
              <a
                href="https://www.instagram.com/hackclubnmit/"
                target="_blank"
                rel="noreferrer noopener "
                style={{ fontSize: '27px' }}
              >
                <IconContext.Provider value={{ title: 'Instagram-Link' }}>
                  <TiSocialInstagram />
                </IconContext.Provider>
              </a>
              <a
                href="https://in.linkedin.com/company/hackclubnmit"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: 'LinkedIn-Link' }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              <a
                href="https://www.facebook.com/pg/hackclubnmit/posts/"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: 'Facebook-Link' }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </a>
              <a
                href="https://github.com/hackclubnmit"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: 'Github-Link' }}>
                  <FaGithub />
                </IconContext.Provider>
              </a>
            </div>
            <div className="social__links-2">
              <a
                href="mailto:hackclub@nmit.ac.in"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: 'Email-Link' }}>
                  <MdEmail />
                </IconContext.Provider>
              </a>
            </div>
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
