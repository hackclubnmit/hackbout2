import React from "react";
import "./Sponsors.css";

import github from "../../assets/sponsors/old/github-2.svg";
import devfolio from "../../assets/sponsors/old/Devfolio.png";
import ibm from "../../assets/sponsors/old/ibm.svg";
import hackClub from "../../assets/sponsors/old/hack-club.svg";
import matic from "../../assets/sponsors/old/Matic.png";
import fold from "../../assets/sponsors/old/fold-logo-inverted.svg";
import codingBlocks from "../../assets/sponsors/old/codingBlocks.png";
import stickerMule from "../../assets/sponsors/old/sticker-mule-logo.png";
import voiceFlow from "../../assets/sponsors/old/voiceFlow.png";
import digitalOcean from "../../assets/sponsors/old/digitalOcean-logo.png";
import IEEE from "../../assets/sponsors/old/ieee-cs-logo.png";
import girlGeeks from "../../assets/sponsors/old/girlGeeks.png";
import gatsby from "../../assets/sponsors/old/gatsby.png";
import inVision from "../../assets/sponsors/old/invision.png";
import jetBrains from "../../assets/sponsors/old/jetbrains.svg";
import bugsee from "../../assets/sponsors/old/bugsee.png";
import wolfram from "../../assets/sponsors/old/Wolfram.png";
import blockchained from "../../assets/sponsors/old/blockchained-india.png";
import challengeRocket from "../../assets/sponsors/old/rocket.svg";
import snapchat from "../../assets/sponsors/old/snap.jpg";
import creativeTim from "../../assets/sponsors/old/creativetim.png";
import map from "../../assets/sponsors/old/map.png";
import cloudSploit from "../../assets/sponsors/old/cloudsploit.png";
import sketch from "../../assets/sponsors/old/sketch.png";
import codeNinja from "../../assets/sponsors/old/ninja.svg";
import restDB from "../../assets/sponsors/old/restdb.webp";
import balsmiq from "../../assets/sponsors/old/balsamiq.svg";
import mozIndia from "../../assets/sponsors/old/moz.jpg";
import devFacebook from "../../assets/sponsors/old/fbdev.png";

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors">
      <h1 className="sponsors-heading">Sponsors</h1>
      <h3 className="old-title">Our Previous Sponsors</h3>
      <div className="archive old__sponsors">
        <div>
          <img
            className="sponsors__img github"
            src={github}
            alt="github-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img devfolio"
            src={devfolio}
            alt="devfolio-logo"
          />
        </div>
        <div>
          <img className="sponsors__img ibm" src={ibm} alt="ibm-logo" />
        </div>
        <div>
          <img
            className="sponsors__img hackClub"
            src={hackClub}
            alt="hackClub-logo"
          />
        </div>
        <div>
          <img className="sponsors__img matic" src={matic} alt="matic-logo" />
        </div>
        <div>
          <img className="sponsors__img fold" src={fold} alt="fold-logo" />
        </div>
        <div>
          <img
            className="sponsors__img codingBlocks"
            src={codingBlocks}
            alt="codingBlocks-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img stickerMule"
            src={stickerMule}
            alt="stickerMule-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img voiceFlow"
            src={voiceFlow}
            alt="voiceFlow-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img digitalOcean"
            src={digitalOcean}
            alt="digitalOcean-logo"
          />
        </div>
        <div>
          <img className="sponsors__img IEEE" src={IEEE} alt="IEEE-logo" />
        </div>
        <div>
          <img
            className="sponsors__img girlGeeks"
            src={girlGeeks}
            alt="girlGeeks-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img gatsby"
            src={gatsby}
            alt="gatsby-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img inVision"
            src={inVision}
            alt="inVision-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img jetBrains"
            src={jetBrains}
            alt="jetBrains-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img bugsee"
            src={bugsee}
            alt="bugsee-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img wolfram"
            src={wolfram}
            alt="wolfram-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img blockchained"
            src={blockchained}
            alt="blockchained-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img challengeRocket"
            src={challengeRocket}
            alt="challengeRocket-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img snapchat"
            src={snapchat}
            alt="snapchat-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img creativeTim"
            src={creativeTim}
            alt="creativeTim-logo"
          />
        </div>
        <div>
          <img className="sponsors__img map" src={map} alt="map-logo" />
        </div>
        <div>
          <img
            className="sponsors__img cloudSploit"
            src={cloudSploit}
            alt="cloudSploit-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img sketch"
            src={sketch}
            alt="sketch-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img codeNinja"
            src={codeNinja}
            alt="codeNinja-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img restDB"
            src={restDB}
            alt="restDB-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img balsmiq"
            src={balsmiq}
            alt="balsmiq-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img devFacebook"
            src={devFacebook}
            alt="devFacebook-logo"
          />
        </div>
        <div>
          <img
            className="sponsors__img mozIndia"
            src={mozIndia}
            alt="mozIndia-logo"
          />
        </div>
      </div>
      {/* <div className="row-mentors">
        <div>
          <svg
            className="svg-separator sep3"
            data-height="100"
            display="block"
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 1600 100"
          >
            <path
              fill="#23b574"
              d="M-40 71.627C20.307 71.627 20.058 32 80 32s60.003 40 120 40 59.948-40 120-40 60.313 40 120 40 60.258-40 120-40 60.202 40 120 40 60.147-40 120-40 60.513 40 120 40 60.036-40 120-40 60.402 40 120 40 59.925-40 120-40 60.291 40 120 40 60.235-40 120-40 60.18 40 120 40h59.82l.18 26H-60V72l20-.373z"
            ></path>
            <path
              fill="#1b8a59"
              d="M-40 83.627C20.307 83.627 20.058 44 80 44s60.003 40 120 40 59.948-40 120-40 60.313 40 120 40 60.258-40 120-40 60.202 40 120 40 60.147-40 120-40 60.513 40 120 40 60.036-40 120-40 60.402 40 120 40 59.925-40 120-40 60.291 40 120 40 60.235-40 120-40 60.18 40 120 40h59.82l.18 14H-60V84l20-.373z"
            ></path>
            <path
              fill="#1fa066"
              d="M-40 95.627C20.307 95.627 20.058 56 80 56s60.003 40 120 40 59.948-40 120-40 60.313 40 120 40 60.258-40 120-40 60.202 40 120 40 60.147-40 120-40 60.513 40 120 40 60.036-40 120-40 60.402 40 120 40 59.925-40 120-40 60.291 40 120 40 60.235-40 120-40 60.18 40 120 40h59.82l.18 138H-60V96l20-.373z"
            ></path>
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default Sponsors;
