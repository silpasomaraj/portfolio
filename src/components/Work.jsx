 import React from 'react'

import './Project.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

function Work() {
  return (

    

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