import React from 'react'
import TeamCard from '../../components/TeamCards/teamCard'
import './Team.css'


import Rudy from '../../assets/team/Rudy.jpg'
import Satvik from '../../assets/team/satvik.png'
import Adi from '../../assets/team/adi.png'
import Ani from '../../assets/team/ani.png'
import Aneja from '../../assets/team/aneja.jpg'
import vishwajeet from '../../assets/team/vishwajeet.jpg'
// import rohit from '../../assets/team/rohit.jpg'
import Somwya from '../../assets/team/somwya.jpeg'
import Kaushal from '../../assets/team/kaushal.jpeg'
import Yash from '../../assets/team/yash.jpg'
import Purnima from '../../assets/team/Purnima.png'
import Alisha from '../../assets/team/alisha.jpg'
import Harshitha from '../../assets/team/Harshitha.jpeg'
import Sayantan from '../../assets/team/sayantan.jfif'
import Madan from '../../assets/team/Madan.jpeg'
import Anant from '../../assets/team/Anant.jfif'
import Anshul from '../../assets/team/Anshul.jpg'
import Anshul1 from '../../assets/team/Anshul1.jpg'
import Onkar from "../../assets/team/onkar.jpg"
import Nitish from "../../assets/team/nitish.jpg"
import Ayush from "../../assets/team/ayush.jpg"

import Nancy from "../../assets/team/nancy.jpg"
import Utsav from "../../assets/team/utsav.jpg"
import Kalyan from "../../assets/team/kalyan.jpg"
import Lasya from "../../assets/team/lasya.jpg"
import Viswambhari from "../../assets/team/viswambhari.jpg"
import shubhamprasad from "../../assets/team/shubhamprasad.jpg"
import shreya from "../../assets/team/shreya.jpg"
import kannad from "../../assets/team/kanaad.jpg"
import kartik from "../../assets/team/kartik.jpg"
import saishwaranand from "../../assets/team/saishwar.jpg"


const Team = () => {
    return (
    <section id="team" className="team">
        
             <h1
        className="mentors-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Team <span className="green">Members</span>
      </h1>
      <br/>
      <h4
        className="team-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Club <span className="green">Leads</span>
      </h4>
      <div class="team-card">
          <TeamCard
           role="Club Lead"
            name="Satvik A" 
            image={Satvik} 
            linkedin="https://www.linkedin.com/in/satvik-a/" 
            github="https://github.com/Blazeleo"
            twitter="https://twitter.com/Satvik51236"
            />
          <TeamCard
           name="Anshul Rai"
           role="Club Co-Lead"
            image={Anshul}
            linkedin="https://www.linkedin.com/in/auralshin" 
            github="https://github.com/auralshin"
            twitter="https://twitter.com/auralshin"
             />
      </div>
      <div className="res-full">
        <div className="half-container">
          <h4
            className="team-heading"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Tech <span className="green">Team</span>
          </h4>
          <div class="team-card">
              <TeamCard
               role="Tech Lead"
                name="Onkar Bharatesh"
                 image={Onkar}
                 linkedin="https://www.linkedin.com/in/onkar-bharatesh-a87b6a1a6/" 
                 github=""
                 twitter="https://twitter.com/HackClubNmit"
                 />
              <TeamCard 
              role="Tech Team"
               name="Nitish kumar" 
               image={Nitish}
               github="https://github.com/technitish9123"
               linkedin="https://www.linkedin.com/in/tecnicalnitish/" 
               twitter="https://twitter.com/HackClubNmit"
                />
                <TeamCard 
              role="Tech Team"
               name="Aayush Kumar" 
               image={Ayush}
               github=""
               linkedin="https://www.linkedin.com/in/aayushkum/" 
               twitter="https://twitter.com/HackClubNmit"
                />
                 <TeamCard 
              role="Tech Team"
               name="Kalyan B" 
               image={Kalyan}
               github="https://github.com/Blazeleo"
               linkedin="https://www.linkedin.com/in/kalyan-b/" 
               twitter="https://twitter.com/HackClubNmit"
                />
               
          </div>
        </div>
        <div class="half-container">
          <h4
            className="team-heading"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Marketing <span className="green">Team</span>
          </h4>
          <div class="team-card">
         
          <TeamCard
           role="Marketing Team"
            name="Harshitha P" 
            image={Harshitha} 
            github="https://github.com/harshithap2000"
            linkedin="https://www.linkedin.com/in/harshitha-p22/" 
            twitter="https://twitter.com/HarshithaP22"
            />
             <TeamCard
           role="Marketing Team"
            name="Lasya Sistla" 
            image={Lasya} 
            github="https://github.com/lasyaistla"
            linkedin="https://www.linkedin.com/in/lasya-sistla-ba98ba1b4/" 
            twitter="https://twitter.com/HackClubNmit"
            />
             <TeamCard
           role="Marketing Team"
            name="Viswambhari A" 
            image={Viswambhari} 
            github="https://github.com/viswambhari"
            linkedin="https://www.linkedin.com/in/viswambhari-anandan/" 
            twitter="https://twitter.com/viswambhari1"
            />
            <TeamCard
           role="Marketing Team"
            name="shubham Prasad" 
            image={shubhamprasad} 
            github=""
            linkedin="https://www.linkedin.com/in/shubham-prasad-7b486b185/" 
            twitter="https://twitter.com/HackClubNmit"
            />
          </div>
        </div>
      </div>
     
      <div className="res-full">
        <div className="half-container">
      <h4
        className="team-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Operation's <span className="green">Team</span>
      </h4>
      <div class="team-card">
     
      <TeamCard
       role="Operation Team"
        name="Piyush Aneja"
         image={Aneja}
         github="https://github.com/Piyush-Aneja"
         linkedin="https://www.linkedin.com/in/piyush-aneja-a29a221a9/" 
         twitter="https://twitter.com/Piyush__Aneja"
         />
         <TeamCard
       role="Operation Team"
        name="Madan"
         image={Madan}
         github="https://github.com/Piyush-Aneja"
         linkedin="https://www.linkedin.com/company/hackclubnmit/mycompany/" 
         twitter="https://twitter.com/HackClubNmit"
         />
         <TeamCard
       role="Operation Team"
        name="Shreya Nanduri"
         image={shreya}
         github=""
         linkedin="https://www.linkedin.com/in/shreya-nanduri-a0080820a/" 
         twitter="https://twitter.com/HackClubNmit"
         />
          <TeamCard
       role="Operation Team"
        name="Kanaad D S"
         image={kannad}
         github=""
         linkedin="https://www.linkedin.com/in/kanaad-d-s-1284a81b3/" 
         twitter="https://twitter.com/HackClubNmit"
         />
          <TeamCard
       role="Operation Team"
        name="Kartik Saini"
         image={kartik}
         github=""
         linkedin="https://www.linkedin.com/in/kartik-saini-709933218/" 
         twitter="https://twitter.com/HackClubNmit"
         />

      </div>
</div>
<div className="half-container">
      <h4
        className="team-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Sponsorship <span className="green">Team</span>
      </h4>
      <div class="team-card">
      <TeamCard
       role="Sponsorship Lead"
        name="Anant Saxena" 
        image={Anant} 
        github="https://github.com/anantsaxena117"
        linkedin="https://www.linkedin.com/in/anantsaxena117/" 
        twitter="https://twitter.com/HackClubNmit"
        />
      <TeamCard 
      role="Sponsorship Team" 
      name="Saishwar Anand" 
      image={saishwaranand} 
      github="https://github.com/saianand32"
      linkedin="https://www.linkedin.com/in/saishwar-anand-b28673204/" 
      twitter="https://twitter.com/HackClubNmit"
      />
      </div>
     </div>
     </div>
     <h4
        className="team-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Design <span className="green">Team</span>
      </h4>
      <div class="team-card">
      <TeamCard
       role="Design Lead" 
       name="Anirudhha Sil"
        image={Ani} 
        github="https://www.linkedin.com/in/aniruddha-sil-251555196/"
        linkedin="https://www.linkedin.com/in/sintancos/" 
        twitter="https://twitter.com/HackClubNmit"
        />
      <TeamCard
       role="Design Team" 
       name="Utsav Sinha" 
       image={Utsav}
       github="https://github.com/utsavs22"
        linkedin="https://www.linkedin.com/in/utsav-sinha-704a90216/" 
        twitter="https://twitter.com/HackClubNmit"
       />

<TeamCard
       role="Design Team" 
       name="Vishwajeet" 
       image={vishwajeet}
       github=""
        linkedin="https://www.linkedin.com/in/vishwajeet-kumar-a85837212/" 
        twitter="https://twitter.com/HackClubNmit"
       />
   
   
      <TeamCard
       role="Design Team" 
       name="Nancy Biyahut" 
       image={Nancy} 
       github=""
       linkedin="https://www.linkedin.com/company/hackclubnmit/mycompany/" 
       twitter="https://twitter.com/HackClubNmit"
       />
      {/* <TeamCard
       role="Design Team" 
       name="Rohit Sharma" 
       image={rohit} 
       github=""
       linkedin="https://www.linkedin.com/company/hackclubnmit/mycompany/" 
       twitter="https://twitter.com/HackClubNmit"
       /> */}
      {/* Not in club any more
       <TeamCard
       role="Design Team" 
       name="Purnima Sharma"
        image={Purnima} 
        github=""
        linkedin="https://www.linkedin.com/in/purnima-sharma-212106158/" 
        twitter=""
        />  */}
      </div>
             </section>
    )
}

export default Team
