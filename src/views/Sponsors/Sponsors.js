import React from 'react';
// import { motion } from 'framer-motion';

import './Sponsors.css';

import devfolio from '../../assets/sponsors/new/Devfolio_Logo-Colored@2x.png';
import celo from '../../assets/sponsors/new/Celo Logo Color@2x.png';
import portis from '../../assets/sponsors/new/Portis_Logo-Colored_Black@2x.png';
import polygon from '../../assets/sponsors/new/Portis_Logo-Colored@2x.png';
import tezos from '../../assets/sponsors/new/Tezos_Logo-Colored@2x.png';

import jetbrains from '../../assets/sponsors/new/jetbrains.svg';
import onePass from '../../assets/sponsors/new/1password-icon.svg';
import crypto from '../../assets/sponsors/new/cryptopolitan.png';
import repl from '../../assets/sponsors/new/replit-icon.svg';

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors">
      <h1 className="sponsors-heading">
        Our <span className="green">Sponsors</span>
      </h1>
      <div className="new__sponsors">
        <div className="sponsors__main">
          <h3>
            <span className="green">Title</span> Sponsors
          </h3>
          <div className="sponsors-grid">
            <a
              href="https://devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="a_devfolio"
            >
              <img
                src={devfolio}
                className="sponsors__img devfolio"
                alt="sponsor devfolio"
              />
            </a>
          </div>
        </div>

        <div className="sponsors__sub">
          <h4>
            <span className="green">Associate</span> Sponsors
          </h4>
          <div className="sponsors-grid">
            <div className="article">
              <a
                href="https://polygon.technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={polygon}
                  className="sponsors__img polygon"
                  alt="sponsor polygon"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.portis.io/  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={portis}
                  className="sponsors__img portis"
                  alt="sponnsor portis"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://celo.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={celo}
                  className="sponsors__img celo"
                  alt="sponsor celo"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://tezos.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tezos}
                  className="sponsors__img tezos"
                  alt="sponsor tezos"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://repl.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={repl}
                  className="sponsors__img replit"
                  alt="sponsor repl.it"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.jetbrains.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={jetbrains}
                  className="sponsors__img jetbrains"
                  alt="sponsor jetbrains"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://1password.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={onePass}
                  className="sponsors__img onepassword"
                  alt="sponsor 1password"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.cryptopolitan.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={crypto}
                  className="sponsors__img cryptopolitan"
                  alt="sponsor cryptopolitan"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
