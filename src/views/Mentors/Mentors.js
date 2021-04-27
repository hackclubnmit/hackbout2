import React from 'react';
import './Mentors.css';

import mOne from '../../assets/mentors/old/kanirudh.jpg';
import mTwo from '../../assets/mentors/old/Manav.jpg';
import mThree from '../../assets/mentors/old/pranjal.jpeg';
import mFour from '../../assets/mentors/old/vasanth.jpg';
import mFive from '../../assets/mentors/old/karthikeyan.jpg';
import mSix from '../../assets/mentors/old/himanshu.jpg';
import mSeven from '../../assets/mentors/old/kalai.PNG';
import mEight from '../../assets/mentors/old/sneha.jpg';
import mNine from '../../assets/mentors/old/Swathi.jpg';
import mTen from '../../assets/mentors/old/chandra.jpg';
import mEleven from '../../assets/mentors/old/rachana.jpg';
import mTwelve from '../../assets/mentors/old/swayam.jpg';
import mThirteen from '../../assets/mentors/old/abhitej.jpg';
import mFourteen from '../../assets/mentors/old/Nagaraja.jpg';
import mFifteen from '../../assets/mentors/old/Vishwas.jpg';
import mSixteen from '../../assets/mentors/old/Anand.jpeg';
import mSeventeen from '../../assets/mentors/old/Kartik.jpg';

const Mentors = () => {
  return (
    <section id="mentors" className="mentors">
      <h1 className="mentors-heading">
        Our <span className="green">Mentors</span>
      </h1>
      <article className="new-mentors"></article>
      <article className="old-mentors">
        <h3 className="old-title">Our Previous Mentors</h3>
        <div
          className="js-flickity gallery"
          data-flickity-options='{ "freeScroll": true, "wrapAround": true }'
        >
          <div className="card" style={{ backgroundImage: `url(${mOne})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Kumar Anirudha</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mTwo})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Manav Ailawadi</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mThree})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Pranjal Paliwal</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mFour})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Nelson Vasanth J</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mFive})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Karthikeyan NG</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mSix})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Himanshu Gupta</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mTwelve})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Swayam Mittal</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mTen})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Chandra Sekhar Nayak</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mEight})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Sneha Sulegay</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mSeven})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Kalaivanan S</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mEleven})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Rachana V</h5>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundImage: `url(${mThirteen})` }}
          >
            <div className="cardContainer">
              <h5 className="cardTitle">Abhitej Singh </h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mNine})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Swathi P</h5>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundImage: `url(${mFourteen})` }}
          >
            <div className="cardContainer">
              <h5 className="cardTitle">Dr. Nagaraja</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mFifteen})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Dr. Vishwas L</h5>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mSixteen})` }}>
            <div className="cardContainer">
              <h5 className="cardTitle">Anand Jagadeesh</h5>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundImage: `url(${mSeventeen})` }}
          >
            <div className="cardContainer">
              <h5 className="cardTitle">Kartik Muralidharan</h5>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Mentors;
