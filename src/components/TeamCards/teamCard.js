import React from 'react'
import './teamCard.css'




const TeamCard = (props) => {
    return (
        <div class="profile_wrap">
            <div className="profile-circle">
                <img src={props.image} alt="" class="profile-image" id="profile-image"/>
                <div class="profile-overlay" id="mouse-over">
                     <a href="">{props.name}</a>
                    <br/>
                    <span>{props.role}</span>
                    <br/>
                    <div class="icons-team">
                        <a className="icon-linkedin" href={props.linkedin} ><i class="fa fa-linkedin" ></i></a>
                        <a className="icon-twitter" href={props.twitter} ><i class="fa fa-twitter"></i></a>
                        <a className="icon-instagram" href={props.instagram} ><i class="fa fa-instagram" ></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamCard