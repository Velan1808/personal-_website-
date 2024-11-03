import React from 'react'
import "./Home.css"
import assest from '../../assests/assest'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div id='Home' className='home'>
       <div className="my-details">
            <p className='name'>Hi, I'm <span>VELAN</span></p>
            <p className="role">Full Stack Developer</p>
            <p className="brief">I’m a passionate full-stack developer, skilled in building responsive and interactive web applications.</p>
            <div className="info">
                <a href="velan1.2.pdf" download="Resume.pdf"><button className="resume">Resume</button></a> 
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/velank18/"> <FaLinkedin className='linkedin icon'/></a>
                    <a href="https://github.com/Velan1808">  <FaGithub className='github icon' /></a>
                    <a href="https://wa.me/916369961739"> <FaWhatsappSquare className='whatsapp icon'/></a>                
                </div>
            </div>
       </div>
       <div className="my-image">
         <img src={assest.my_img} alt="" />
       </div>
    </div>
  )
}

export default Home