import React, { useState } from 'react'
import './Navbar.css';
import logo from '../assets/—Pngtree—vector portfolio icon_4013856.png'
import {Link} from 'react-scroll';
import contactImg from '../assets/contact.png'
import menu from '../assets/icons8-hamburger-50.png'

function Navbar() {
  const[showMenu,setShowMenu]=useState(false)
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
         <div className="desktopMenu">
              <Link activeClass ='active' to='intro' spy= {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
             
              <Link activeClass ='active' to='works' spy= {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Project</Link>
              <Link activeClass ='active' to='Skills' spy= {true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem" >Skills</Link>
              <Link activeClass ='active' to='Education' spy= {true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem" >Education</Link>
              

              

         </div>
         <button className="desktopMenuBtn" onClick={()=>{
             document.getElementById('contact').scrollIntoView({behavior:'smooth'});
         }}>
            <img src={contactImg}alt="" className="desktopMenuImg" />
            contact me
         </button>

         <img src={menu} alt="logo" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
         <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
              <Link activeClass ='active' to='intro' spy= {true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>(false)}>Home</Link>
             
              <Link activeClass ='active' to='works' spy= {true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>(false)} >Project</Link>
              <Link activeClass ='active' to='skills' spy= {true} smooth={true} offset={-100} duration={500}className="listItem" onClick={()=>(false)} >Skills</Link>
              <Link activeClass ='active' to='Education' spy= {true} smooth={true} offset={-100} duration={500}className="listItem"  onClick={()=>(false)}>Education</Link>
              <Link activeClass ='active' to='contact' spy= {true} smooth={true} offset={-100} duration={500}className="listItem"  onClick={()=>(false)}>Contact</Link>
         </div>
    </nav>
  )
}

export default Navbar