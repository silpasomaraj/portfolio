 import React from 'react'

import './Project.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

function Work() {
  return (

    /*<div className='projectCard'>
    <img src={props.imgsrc} alt="" />
    <h2 className='projectTitle'>{props.title}</h2>
    <div className='prodetails'>
       <p>{props.text}</p>
          <div className='probtn'>
            <NavLink to={props.view}className="btn">View</NavLink>
            <NavLink to={props.source} className="btn">Source</NavLink>
          </div>
    </div>
</div>*/

    <section id='works'>
       <h2 className='worktitle'>My projects</h2>
       
       
        <div className='projectContainer'>
        {WorkCardData.map((val,ind)=>{
                return(
                    <WorkCard key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
             })}
        </div>

    </section>
  )
}

export default Work;