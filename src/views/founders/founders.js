import React from 'react'
import TeamCard from '../../components/TeamCards/teamCard'
import './founders.css'

import Anurag from '../../assets/founders/Anurag.jfif'
import Rachet from '../../assets/founders/rachet.jpeg'
import Avinash from '../../assets/founders/avinash.jpeg'
import Arpit from '../../assets/founders/Arpit.jpg'
import Abhishek from '../../assets/founders/Abhishek.jpg'
import Sagar from '../../assets/founders/sagar.jpg'
import Dheetu from '../../assets/founders/Dheemanth.jpg'

const Founder = () => {
    return (
    <section id="founder" className="founder">
        
             <h1
        className="mentors-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Founding <span className="green">Members</span>
      </h1>
      <br/>
      <div class="founder-card">
          <TeamCard role="Founder" name="Anurag Singh" image={Anurag} />
          <TeamCard role="Co-Founder" name="Rachet Mudnur" image={Rachet}/>
      </div>
      <div class="founder-card">
          <TeamCard role="Design Lead" name="Arpit Giri" image={Arpit} />
          <TeamCard role="Sponsor Lead" name="Dheetu Gowda" image={Dheetu} />
          <TeamCard role="Tech Lead" name="Abhi Kedia" image={Abhishek} />
          <TeamCard role="Operations Laad" name="Avinash Singh" image={Avinash} />
          <TeamCard role="Public Relation Lead" name="Sagar M" image={Sagar} />
         
      </div>
        </section>
    )
}

export default Founder