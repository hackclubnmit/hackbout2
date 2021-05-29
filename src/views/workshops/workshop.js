import React from 'react'
import './workshop.css'
import CourseCard from '../../components/workshopCard/workshopCard'
const Workshop = (props) => {
    return (
        <section id="workshop" className="workshop">
           <CourseCard/>
        </section>
    );
}
export default Workshop;