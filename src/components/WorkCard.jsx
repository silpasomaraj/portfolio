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

    /*<section id='works'>
       <h2 className='worktitle'>My portfolio</h2>
       <span className='workdesk'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam veniam soluta quaera.</span>
       
        <div className='projectContainer'>
            <div className='projectCard'>
                 <img src={pro1} alt="" />
                 <h2 className='projectTitle'>project title</h2>
                 <div className='prodetails'>
                    <p>this is the text</p>
                       <div className='probtn'>
                         <NavLink to='url.com' className="btn">View</NavLink>
                         <NavLink to='url.com' className="btn">Source</NavLink>
                       </div>
                 </div>
            </div>
        </div>

    </section>*/
  )
}

export default WorkCard