import React from 'react';

import first from '../../assets/prizes/first.png';
import second from '../../assets/prizes/second.png';
import third from '../../assets/prizes/third.png';

import celo from '../../assets/sponsors/new/Celo Logo Color@2x.png';
import portis from '../../assets/sponsors/new/Portis_Logo-Colored_Black@2x.png';
import polygon from '../../assets/sponsors/new/Portis_Logo-Colored@2x.png';
import tezos from '../../assets/sponsors/new/Tezos_Logo-Colored@2x.png';

import './Prizes.css';

const Prizes = () => {
  return (
    <section id="prizes" className="prizes">
      <h1
        className="prizes__title green"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Prizes
      </h1>
      <div className="prizes__main">
        <div
          className="prizes__card second"
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <img src={second} className="prizes__img" alt="second prize" />
          <p>INR 30,000</p>
        </div>
        <div
          className="prizes__card first"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <img src={first} className="prizes__img" alt="first prize" />
          <p>INR 50,000</p>
        </div>
        <div
          className="prizes__card third"
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <img src={third} className="prizes__img" alt="third prize" />
          <p>INR 20,000</p>
        </div>
      </div>
      <div className="prizes__sub">
        <h3
          className="prizes__title--sub green"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Bounties
        </h3>
        <div className="prizes__grid">
          <div
            className="bounty__card b_polygon"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={polygon} alt="polygon bounty" />
              <p>Polygon API track prize</p>
            </div>
            <div>
              <a
                href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link"
              >
                Know More
              </a>
            </div>
          </div>
          <div
            className="bounty__card b_portis"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={portis} alt="portis bounty" />
              <p>Portis API track prize</p>
            </div>
            <div>
              <a
                href="https://www.notion.so/Portis-by-Shapeshift-Devfolio-Hackathon-Season-Prize-e198dfd094a9411b8cd0f80d76a04a90"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link"
              >
                Know More
              </a>
            </div>
          </div>
          <div
            className="bounty__card b_celo"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={celo} alt="celo bounty" />
              <p>Celo API track prize</p>
            </div>
            <div>
              <a
                href="https://www.notion.so/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link"
              >
                Know More
              </a>
            </div>
          </div>
          <div
            className="bounty__card b_tezos"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={tezos} alt="tezos bounty" />
              <p>Tezos API track prize</p>
            </div>
            <div>
              <a
                href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
