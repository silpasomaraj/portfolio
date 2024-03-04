import React from 'react'
import pro1 from '../assets/video-player.png'
import { NavLink } from 'react-router-dom'
import './Project.css'

function WorkCard(props) {
  return (

    <div className='projectCard'>
    <img src={props.imgsrc} alt="" />
    <h2 className='projectTitle'>{props.title}</h2>
    <div className='prodetails'>
       <p>{props.text}</p>
          <div className='probtn'>
            <NavLink to={props.view}className="btn">View</NavLink>
            <NavLink to={props.source} className="btn">Source</NavLink>
          </div>
    </div>
</div>

    
  )
}

export default WorkCard