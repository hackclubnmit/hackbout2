import React from 'react'; 

import first from '../../assets/prizes/first.png';
import second from '../../assets/prizes/second.png';
import third from '../../assets/prizes/third.png';

import celo from '../../assets/sponsors/new/Celo Logo Color@2x.png';
import portis from '../../assets/sponsors/new/Portis_Logo-Colored_Black@2x.png';
import polygon from '../../assets/sponsors/new/Portis_Logo-Colored@2x.png';
import tezos from '../../assets/sponsors/new/Tezos_Logo-Colored@2x.png';
import codeparva from '../../assets/sponsors/new/codeparva.svg';
import girlgeeks from '../../assets/sponsors/new/girlGeeks.3f8ba886.png';
import bindia from '../../assets/sponsors/new/BIndia.png';
import clerky from '../../assets/sponsors/new/clerky.png'
import devfolio from '../../assets/sponsors/new/Devfolio_Logo-Colored@2x.png';

import StickerMule from '../../assets/sponsors/new/02-sticker-mule-logo-light-bg-stacked.svg';
import echoAR from '../../assets/sponsors/new/echoAR - Logo 2020 - Dark.png';
import sashido from '../../assets/sponsors/new/sashido-logo-for sites.png';
import framer from '../../assets/sponsors/new/black-horizontal.svg';
import interviewCake from '../../assets/sponsors/new/cake_logo_blue_gray.svg';
import testMail from '../../assets/sponsors/new/testmail.png';
import convise from '../../assets/sponsors/new/coinvise (2).png';
import onePass from '../../assets/sponsors/new/1password-icon.svg';


import xyz from '../../assets/sponsors/new/xyz.png';

import ieee from '../../assets/sponsors/new/ieee-cs-logo.png';
import jetbrains from '../../assets/sponsors/new/jetbrains_logo.png'
import replit from '../../assets/sponsors/new/repl.png'

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
      <h5  className="prizes__title_2 black"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease">
          To Be Revealed... </h5>

      <div className="prizes__main">
        <div
          className="prizes__card second"
          // data-aos="fade-up-right"
          data-aos="zoom-in"

          data-aos-offset="100"
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
          // data-aos="fade-up-left"
          data-aos="fade-up"
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
          Sponsored Prizes
        </h3>

        <div className="prizes__grid">
        <div
            className="bounty__card b_bindia"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div> 
              <span> to be Announced....</span>
            </div>
            </div>
            
          </div>
       {/* <div className="prizes__grid">
        <div
            className="bounty__card b_bindia"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={bindia} alt="Blockchained India bounty" />
              <p className="bindia_p">100 Days of Code Scholarship</p>
            </div>
            <article>
              Winning Team of Hackbout will get complete Scholarship for Blockchained India's 4th Cohort of <strong>100 Days of Code</strong>
            </article>
            <div>
              <a
                href="https://medium.com/blockchainedindia/a-glimpse-of-the-first-50-days-of-our-100-days-of-code-initiative-6e3d97ee2fb4"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                About 100 Days of Code
              </a>
          </div>
        </div>
        <div
            className="bounty__card b_clerky"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={clerky} alt="Blockchained India bounty" />
              <p className="bindia_p">Incubation Offer</p>
            </div>
            <article>
               <strong>$ 799 </strong> to the winning team to incubate their idea into a company based in delaware, USA.
            </article>
            <div>
              <a
                href="https://www.clerky.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link"
              >
                Know More
              </a>
            </div>
        </div>
        
        <div
            className="bounty__card b_sashido"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={sashido} alt="sashido Prize" />
              <p className="bindia_p">SashiDo Internship Oppurtunity</p>
            </div>
            <article>
             SashiDo will be providing <strong>free credits </strong> for their platform also internship opportunities to the winners.
            </article>
            <div>
              <a
                href="https://www.sashido.io/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>

       <div
            className="bounty__card b_cake"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={interviewCake} alt="interviewcake prize" />
              <p className="bindia_p">Interview Prep Course</p>
            </div>
            <article>
            Interview Preparation Course to the <strong>winners</strong> of Hackbout from Interview Cake.
            </article>
            <div>
              <a
                href="https://www.interviewcake.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>
        </div>*/}
        </div>
     {/* <div className="prizes__sub">
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
          <div
            className="bounty__card b_coinvise"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={convise} alt="Coinvise Bounty" />
              <p className="coinvise_p">Coinvise SDK Track</p>
            </div>
            <article style={{fontSize:"16px",color:"#F5F5F5"}}>
            Coinvise will be giving <strong>Rs.15000</strong> for the best hack built on top of Coinvise SDK  during the hackathon.
              Projects will receive seed funding of <strong>$5000</strong> and Oppurtunity to join Coinvise Team.
            </article>
            <div>
              <a
                href="https://www.notion.so/Coinvise-Devfolio-Hackathon-Season-Prize-b44b4790de2f4fefae5492cc606f5bcf"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link"
              >
                Know More
              </a>
            </div>
        </div>
          <div
            className="bounty__card b_code-Parva"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={codeparva} alt="codeparva bounty" />
              <p>Code Parva Bounty</p>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1hv3s_mOQ6uFfINH1o9NxH577cgIXl9Ou/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link"
              >
                Know More
              </a>
            </div>
          </div>
          <div
            className="bounty__card b_girlgeek"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={girlgeeks} alt="girlsgeek bounty" />
              <p>GirlGeek Bounty</p>
            </div>
            {/* <article>
              Bounty Worth 15k 
            </article>
            <div>
              <a
                href="https://www.notion.so/hackclubnmit/GirlGeeksHack-Submission-Guidelines-138b0b82608243df90c32f3db0710518"
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
      <div className="prizes__sub">
        <h3
          className="prizes__title--sub green"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Other Prizes
        </h3>
        <div className="prizes__grid">
    
       
        <div
            className="bounty__card b_onepass"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={onePass} alt="1Password Prize" />
              <p className="bindia_p">Free Premium Membership</p>
            </div>
            <article>
              Winning Team of Hackbout will get <strong>1 year free Membership </strong> from 1Password
            </article>
            <div>
              <a
                href="https://1password.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>
        <div
            className="bounty__card b_echoar"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={echoAR} alt="Blockchained India bounty" />
              <p className="bindia_p">EchoAR for ALL</p>
            </div>
            <article>
              For the teams building AR project can use echoAR platform for <strong>free</strong> during Hackathon.
            </article>
            <div>
              <a
                href="https://www.echoar.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>
        <div
            className="bounty__card b_replit"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={replit} alt="Replit" />
              <p className="bindia_p">Repl.it Hacker Plan</p>
            </div>
            <article>
              For all the Participants 3 month Hacker plan for <strong>free</strong> from <strong>Repl.it</strong>
            </article>
            <div>
              <a
                href="http://repl.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>
        <div
            className="bounty__card b_xyz"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={xyz} alt="XYZ prizes" />
              <p className="bindia_p">.xyz domain for all</p>
            </div>
            <article>
             For all the participants of Hackbout <strong>free</strong> .xyz domain.
            </article>
            <div>
              <a
                href="https://www.gen.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>
        <div
            className="bounty__card b_testmail"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={testMail} alt="testmail" />
              <p className="bindia_p">Testmail premium testmail account</p>
            </div>
            <article>
            Winning Team of Hackbout will get <strong> free premium accont </strong> from testmail.app
            </article>
            <div>
              <a
                href="https://www.testmail.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>
        <div
            className="bounty__card b_framer"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <img src={framer} alt="framer prize" />
              <p className="bindia_p">Framer Premium Subscription</p>
            </div>
            <article>
              Framer providing pro subscription to <strong>winners</strong> of Hackathon.
            </article>
            <div>
              <a
                href="https://www.framer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bounty__card-link bindia_btn"
              >
                Know More
              </a>
          </div>
        </div>
        </div>
        </div>*/}
    </section>
  );
};

export default Prizes;