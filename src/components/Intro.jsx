import React from 'react'
import './Intro.css';
import bg from '../assets/WhatsApp Image 2023-10-25 at 13.46.04_7786b237.png'
import {Link} from 'react-scroll';
import btnImg from '../assets/hireme.png'
import pdf from '../assets/jakes-resume.pdf'



import { NavLink } from 'react-router-dom';


function Intro() {
  return (
   
    <section id="intro">
        <div className="introcontent">
             <span className='hello'>Hello,</span>
             <span className='introText'>I'm <span className='introName'>SILPA S</span> <br />Web developer</span>
             <p className='introPara'>I am a skilled web developer Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quo dolorum neque dolore fugiat quasi rem ducimus quibusdam minus? Obcaecati <br />veniam necessitatibus dolor illum provident animi harum eos sed minus sequi! </p>
             
             
             
             <Link href=''><button onClick={() => window.open(pdf)} className='btn'><img src={btnImg} alt=""  className='btnImage' />Hire me</button></Link>
         </div>

        <img src={bg} alt="" className="bg" />

    </section>
  )
}

export default Intro