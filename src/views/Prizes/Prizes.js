import React from 'react';

import first from '../../assets/prizes/first.png';
import second from '../../assets/prizes/second.png';
import third from '../../assets/prizes/third.png';

import './Prizes.css';

const Prizes = () => {
  return (
    <section id="prizes" className="prizes">
      <h1 className="prizes__title green">Prizes</h1>
      <div className="prizes__main">
        <div className="prizes__card second">
          <img src={second} className="prizes__img" alt="second prize" />
          <p>INR 30,000</p>
        </div>
        <div className="prizes__card first">
          <img src={first} className="prizes__img" alt="first prize" />
          <p>INR 50,000</p>
        </div>
        <div className="prizes__card third">
          <img src={third} className="prizes__img" alt="third prize" />
          <p>INR 20,000</p>
        </div>
      </div>
      <h3 className="prizes__title--sub green">Bounties</h3>
      <div className="prizes__sub">To Be Announced Soon!</div>
    </section>
  );
};

export default Prizes;
