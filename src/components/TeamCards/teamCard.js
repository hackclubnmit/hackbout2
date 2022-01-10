import React from 'react'
import './teamCard.css'




const TeamCard = (props) => {
    return (
        <div class="profile_wrap">
            <div className="profile-circle">
                <img src={props.image} alt="" class="profile-image" id="profile-image"/>
            </div>
            <div className="profile-name">{props.name}</div>
            <div className="profile-role">{props.role}</div>
            <div class="icons-team">
                        <a className="icon-linkedin" href={props.linkedin} target="blank"  ><i class="fab fa-linkedin" ></i></a>
                         <a className="icon-twitter" href={props.twitter} target="blank"  ><i class="fab fa-twitter"></i></a>
                        {/* <a className="icon-instagram" href={props.instagram} ><i class="fab fa-instagram" ></i></a>  */}
                        <a className="icon-github" href={props.github} target="blank" ><i class="fab fa-github" ></i></a>
                    </div>
        </div>
    )
}
export default TeamCard