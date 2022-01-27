import React from "react";
// import { motion } from 'framer-motion';

import "./Sponsors.css";

import devfolio from "../../assets/sponsors/new/Devfolio_Logo-Colored@2x.png";
import celo from "../../assets/sponsors/new/Celo Logo Color@2x.png";
import leadinglearners from "../../assets/sponsors/new/leadinglearners.png";
import voiceflow from "../../assets/sponsors/new/voiceflow.png";
import givemycertificate from "../../assets/sponsors/new/givemycertificate.png";
import interviewbuddy from "../../assets/sponsors/new/interviewbuddy.png";
import balsamiq from "../../assets/sponsors/new/balsamiq.png";
import portis from "../../assets/sponsors/new/Portis_Logo-Colored_Black@2x.png";
import polygon from "../../assets/sponsors/new/Portis_Logo-Colored@2x.png";
import tezos from "../../assets/sponsors/new/Tezos_Logo-Colored@2x.png";
import filecoin from "../../assets/sponsors/new/filecoin.svg";
import streamyard from "../../assets/sponsors/new/streamyard.svg";
import taskade from "../../assets/sponsors/new/taskade.svg";
import wolfram from "../../assets/sponsors/new/wolfram.png";
import StickerMule from "../../assets/sponsors/new/02-sticker-mule-logo-light-bg-stacked.svg";
import echo3d from "../../assets/sponsors/new/echo3dhackbout3.png";
import sashido from "../../assets/sponsors/new/sashido-logo-for sites.png";
import rosenfeld from "../../assets/sponsors/new/Rosenfeld_logohackbout3.png";
import framer from "../../assets/sponsors/new/black-horizontal.svg";
import interviewCake from "../../assets/sponsors/new/interviewcakehackbout3.svg";
import testMail from "../../assets/sponsors/new/testmail.jpg";
import convise from "../../assets/sponsors/new/coinvise.png";
import onePass from "../../assets/sponsors/new/1password-icon.svg";
import bindia from "../../assets/sponsors/new/BIndia.png";
import aicte from "../../assets/sponsors/new/aicte.png";
import xyz from "../../assets/sponsors/new/xyz.png";
import codeparva from "../../assets/sponsors/new/codeparva.svg";
import ieee from "../../assets/sponsors/new/ieee-cs-logo.png";
import jetbrains from "../../assets/sponsors/new/jetbrains_logo.png";
import replit from "../../assets/sponsors/new/repl.png";
import clerky from "../../assets/sponsors/new/clerky.png";
import DeepSource from "../../assets/sponsors/new/deepsource.svg";
import gfi from "../../assets/sponsors/new/gfi-logo-white.svg";
import egghead from "../../assets/sponsors/new/egghead.PNG";
// import jetbrains from '../../assets/sponsors/new/jetbrains.svg';
// import crypto from '../../assets/sponsors/new/cryptopolitan.png';
// import repl from '../../assets/sponsors/new/replit-icon.svg';

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors">
      <h1
        className="sponsors-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Our <span className="green">Sponsors</span>
      </h1>

      {
        <div className="new__sponsors">
          <div className="sponsors__main">
            <h3
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <span className="green">Title</span> Sponsor
            </h3>
            <div className="sponsors-grid">
              <a
                // href="https://twitter.com/devfolio/"
                href="https://devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="a_devfolio"
              >
                <img
                  src={devfolio}
                  className="sponsors__img devfolio"
                  alt="sponsor devfolio"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  
                />
              </a>

              <a
                href="https://polygon.technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={polygon}
                  className="sponsors__img polygon"
                  alt="sponsor polygon"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
          </div>

          <div className="sponsors__sub">
            <h4
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <span className="green">Associate</span> Sponsors
            </h4>

            {/* <div className="tobeannounced">
              <h4
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                <span> To be Announced...</span>
              </h4>
            </div> */}

            {/*    <div className="sponsors-grid">
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
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
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
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
          </div> */}

           
            <div className="associate-sponsor">
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
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
              <div className="article">
                <a
                  href="https://filecoin.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={filecoin}
                    className="sponsors__img filecoin"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
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
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>

            <div className="sponsors__sub">
            <h4
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <span className="green">Gold</span> Sponsors
            </h4>
            </div>

            <div className="associate-sponsor">
            <div className="article">
                <a
                  href="https://www.sashido.io/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={wolfram}
                    className="sponsors__img filecoin"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
             

              <div className="article">
                <a
                  href="https://www.sashido.io/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={taskade}
                    className="sponsors__img filecoin"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
              <div className="article">
                <a
                  href="https://www.clerky.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={clerky}
                    className="sponsors__img tezos"
                    alt="sponsor Shashido"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
              
            </div>

            {/* <div className="associate-sponsor">
            <div className="article">
                <a
                  href="https://www.clerky.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={clerky}
                    className="sponsors__img tezos"
                    alt="sponsor Shashido"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
            </div> */}


            <div className="sponsors__sub">
            <h4
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <span className="green">Silver</span> Sponsors
            </h4>
            </div>

            <div className="associate-sponsor">
              <div className="article">
                <a
                  href="https://rosenfeldmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={rosenfeld}
                    className="sponsors__img filecoin"
                    alt="sponsor Shashido"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>

              <div className="article">
                <a
                  href="https://www.sashido.io/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={sashido}
                    className="sponsors__img filecoin"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
              <div className="article">
                <a
                  href="https://www.interviewcake.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={interviewCake}
                    className="sponsors__img filecoin"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
            </div>

            <div className="associate-sponsor" >
            
              <div className="article">
              <a
                href="https://www.voiceflow.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={voiceflow}
                  className="sponsors__img filecoin"
                  alt="sponsor celo"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  // style={{width:"224px"}}

                />
              </a>
            </div>

            <div className="article">
              <a
                href="https://givemycertificate.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={givemycertificate}
                  className="sponsors__img filecoin"
                  alt="sponsor celo"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  style={{width:"80px"}}
                />
              </a>
            </div>

            <div className="article">
              <a
                href="https://balsamiq.com/wireframes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={balsamiq}
                  className="sponsors__img filecoin"
                  alt="sponsor celo"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            </div>


              <div className="associate-sponsor">
              <div className="article">
              <a
                href="https://linktr.ee/leadinglearners"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={leadinglearners}
                  className="sponsors__img filecoin"
                  alt="sponsor celo"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  // style={{width:"400px"}}

                />
              </a>
            </div>

            <div className="article">
              <a
                href="https://streamyard.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={interviewbuddy}
                  className="sponsors__img filecoin"
                  alt="sponsor celo"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  // style={{width:"400px"}}

                />
              </a>
            </div>
            <div className="article">
                <a
                  href="https://www.echo3d.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={echo3d}
                    className="sponsors__img filecoin"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
            
              
            </div>
              <div className="associate-sponsor">
              
              <div className="article">
              <a
                href="https://streamyard.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={streamyard}
                  className="sponsors__img filecoin"
                  alt="sponsor celo"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  // style={{width:"400px"}}

                />
              </a>
            </div>
              
            </div>
            {/*
            <div className="article">
              <a
                href="https://stickermule.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={StickerMule}
                  className="sponsors__img stickermule"
                  alt="sponsor tezos"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.coinvise.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={convise}
                  className="sponsors__img coinvise"
                  alt="sponsor tezos"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.coinvise.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={clerky}
                  className="sponsors__img clerky"
                  alt="sponsor tezos"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
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
                  alt="sponsors onepassword"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.echoar.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={echoAR}
                  className="sponsors__img echoAR"
                  alt="sponsors echoAR"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.egghead.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={egghead}
                  className="sponsors__img egghead"
                  alt="sponsors egghead"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://goodfirstissue.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={gfi}
                  className="sponsors__img gfi"
                  alt="sponsors gfi"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://deepsource.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={DeepSource}
                  className="sponsors__img deepsource"
                  alt="sponsors DeepSource"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://replit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={replit}
                  className="sponsors__img replit"
                  alt="sponsors replit"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
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
                  alt="sponsors jetbrains"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.sashido.io/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sashido}
                  className="sponsors__img sashido"
                  alt="sponsors sashido"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.framer.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={framer}
                  className="sponsors__img framer"
                  alt="sponsors framer"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.interviewcake.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={interviewCake}
                  className="sponsors__img cake"
                  alt="sponsors cake"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://testmail.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={testMail}
                  className="sponsors__img testmail"
                  alt="sponsors testmail"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.blockchainindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={bindia}
                  className="sponsors__img bindia"
                  alt="sponsors Blockchained India"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://codeparva.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={codeparva}
                  className="sponsors__img codeparva"
                  alt="sponsors codeparva"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://gen.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={xyz}
                  className="sponsors__img xyz"
                  alt="sponsors XYZ"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ieee}
                  className="sponsors__img ieee"
                  alt="sponsors IEEE"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.aicte-india.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={aicte}
                  className="sponsors__img aicte"
                  alt="sponsors AICTE"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
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
          </div> */}
          </div>
        </div>
      }
    </section>
  );
};

export default Sponsors;
