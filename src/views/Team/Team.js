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
      <div class="team-card">
          <TeamCard role="Club Lead" name="Rudransh Tewari" linkedin="/" image={Rudy} />
          <TeamCard name="Anshul Rai" image={Anshul1} role="co-lead"/>
      </div>
      <div class="team-card">
          <TeamCard role="Design Lead" name="Purnima Sharma" image={Purnima} />
          <TeamCard role="Operation Lead" name="Somwya Sri" image={Somwya}/>
          <TeamCard role="Tech Lead" name="Kaushal" image={Kaushal} />
          <TeamCard role="Design Lead" name="Sayantan Ghosh" image={Sayantan} />
          <TeamCard role="Marketing Lead" name="Alisha Ahmed" image={Alisha} />
          <TeamCard role="Operation Team" name="Yash Jaiswal" image={Yash}/>
          <TeamCard role="Operation Team" name="Madan" image={Madan} />
          <TeamCard role="Tech Team" name="Satvik" image={Satvik} />
          <TeamCard role="Operation Team" name="Piyush Aneja" image={Aneja}/>
          <TeamCard role="Design Team" name="Aditya Vijaykumar" image={Adi} />
         <TeamCard role="Design Team" name="Anirudhha Sil" image={Ani} />
         <TeamCard role="Marketing Team" name="Harshitha P" image={Harshitha} />
         <TeamCard role="Sponsorship Team" name="Anant Saxena" image={Anant} />
      </div>
        </section>
    )
}

export default Team
