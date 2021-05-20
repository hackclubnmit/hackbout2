import React from 'react'
import TeamCard from '../../components/TeamCards/teamCard'
import './founders.css'

import Yash from '../../assets/team/yash.jpg'
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
          <TeamCard
           role="Founder"
            name="Anurag Singh"
             image={Anurag}
             linkedin="https://www.linkedin.com/in/ashleymavericks/"
             twitter="https://twitter.com/ashleymavericks"
             github="https://github.com/ashleymavericks"
             />
          <TeamCard
           role="Co-Founder" 
           name="Rachet Mudnur" 
           image={Rachet}
           linkedin="https://www.linkedin.com/in/rachetm/"
             twitter="https://twitter.com/rachet_m"
             github="https://github.com/rachetm"
           />
      {/* <TeamCard
       role="Operations Head"
        name="Avinash Singh" 
        image={Avinash}
        linkedin="https://www.linkedin.com/in/avinash-kumar-singh-0b127017b/"
             twitter="https://twitter.com/avi18sngh"
             github="https://github.com/gitavinashsingh"
        />
      <TeamCard
       role="Sponsor Head"
        name="Dheetu Gowda"
         image={Dheetu}
         linkedin="https://www.linkedin.com/in/dheemanth-m-d/"
             twitter="https://twitter.com/dheemanthmd12"
             github="https://github.com/Dheemanth-gowda"
         /> */}

      </div>
      <h1
        className="mentors-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Club <span className="green"> Leads 2020</span>
      </h1>
      <div class="founder-card">
          {/* <TeamCard
           role="Design Head"
            name="Arpit Giri"
             image={Arpit} 
             linkedin="https://www.linkedin.com/in/arpitgiri027/"
             twitter=""
             github=""
             /> */}
          <TeamCard
           role="Club Lead"
            name="Abhi Kedia"
             image={Abhishek}
             linkedin="https://www.linkedin.com/in/abhikedia/"
             twitter="https://twitter.com/abhikedia_"
             github="https://github.com/abhikedia"
             />
         
          <TeamCard
           role="Club Co-Lead"
            name="Sagar M"
             image={Sagar}
             linkedin="https://www.linkedin.com/in/sagar-mohan-0654321b1/"
             twitter=""
             github="https://github.com/sarohan"
             />
          {/* <TeamCard 
          role="Marketing Head"
           name="Yash Jaiswal" 
           image={Yash}
           linkedin="https://www.linkedin.com/in/yashjaiswal1/"
             twitter=""
             github="https://github.com/yashjaiswal1"
           /> */}
      </div>

        </section>
    )
}

export default Founder