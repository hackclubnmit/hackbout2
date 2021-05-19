import React from 'react'
import TeamCard from '../../components/TeamCards/teamCard'
import './Team.css'


import Rudy from '../../assets/team/Rudy.jpg'
import Satvik from '../../assets/team/satvik.png'
import Adi from '../../assets/team/adi.png'
import Ani from '../../assets/team/ani.png'
import Aneja from '../../assets/team/aneja.jpg'
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
            name="Rudransh Tewari" 
            image={Rudy} 
            linkedin="https://www.linkedin.com/in/rudy7/" 
            github="https://github.com/rudyt7"
            twitter=""
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
                name="Kaushal"
                 image={Kaushal}
                 linkedin="https://www.linkedin.com/in/kaushal-bhat-8374451a2/" 
                 github="https://github.com/k4u5h4L"
                 twitter=""
                 />
              <TeamCard 
              role="Tech Team"
               name="Satvik" 
               image={Satvik}
               github="https://github.com/Blazeleo"
               linkedin="https://www.linkedin.com/in/satvik-a-aa087b1a2/" 
               twitter="https://twitter.com/Satvik51236"
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
           role="Marketing Lead"
            name="Alisha Ahmed"
             image={Alisha}
             github=""
             linkedin="https://www.linkedin.com/in/alisha-ahmed-0786/" 
             twitter=""
             />
          <TeamCard
           role="Marketing Team"
            name="Harshitha P" 
            image={Harshitha} 
            github="https://github.com/harshithap2000"
            linkedin="https://www.linkedin.com/in/harshitha-p22/" 
            twitter="https://twitter.com/HarshithaP22"
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
       role="Operation Lead"
        name="Sowmya Sri" 
        image={Somwya}
        github=""
        linkedin="https://www.linkedin.com/in/sowmya-sri-p-355a57192/" 
        twitter=""
        />
      <TeamCard
       role="Operation Team"
        name="Piyush Aneja"
         image={Aneja}
         github="https://github.com/Piyush-Aneja"
         linkedin="https://www.linkedin.com/in/piyush-aneja-a29a221a9/" 
         twitter="https://twitter.com/Piyush__Aneja"
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
        twitter=""
        />
      <TeamCard 
      role="Sponsorship Team" 
      name="Madan" 
      image={Madan} 
      github="https://github.com/madankris"
      linkedin="" 
      twitter=""
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
       name="Sayantan Ghosh"
        image={Sayantan} 
        github=""
        linkedin="https://www.linkedin.com/in/sintancos/" 
        twitter=""
        />
      <TeamCard
       role="Design Team" 
       name="Anirudhha Sil" 
       image={Ani}
       github="https://github.com/lawlesx"
        linkedin="https://www.linkedin.com/in/aniruddha-sil-251555196/" 
        twitter=""
       />
   
   
      <TeamCard
       role="Sponsorship Team" 
       name="Aditya Vijaykumar" 
       image={Adi} 
       github="https://github.com/aditya-vijaykumar"
       linkedin="https://www.linkedin.com/in/aditya-vijaykumar/" 
       twitter=""
       />
      <TeamCard
       role="Design Team" 
       name="Purnima Sharma"
        image={Purnima} 
        github=""
        linkedin="https://www.linkedin.com/in/purnima-sharma-212106158/" 
        twitter=""
        /> 
      </div>
             </section>
    )
}

export default Team
