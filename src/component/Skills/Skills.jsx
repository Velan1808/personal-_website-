import React from 'react'
import "./Skills.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import assest from '../../assests/assest';

const Skills = () => {
  return (
    <div id='Skills' className="skills">
        <hr />
        <h1 className='title-s'>Skills</h1>
        <div className="skills-details">
      
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">Front-end</p>
                </div>
                <div class="flip-card-back">
                    <p > <FaHtml5 className="skill-icon html"/> <p>HTML</p></p>
                    <p > <FaCss3Alt className="skill-icon css"/> <p>CSS</p></p>
                    <p > <TbBrandJavascript className="skill-icon javascript"/><p>JavaScript</p></p>
                    <p > <FaReact className="skill-icon react"/> <p>React</p></p>                   
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">Back-end</p>
                </div>
                <div class="flip-card-back">
                    <p > <FaNode className="skill-icon node"/> <p>Node.js</p></p>
                    <p > <FaNodeJs className="skill-icon node"/> <p>Express.js</p></p>
                    <p > <SiMongodb className="skill-icon mongodb"/><p>MongoDB</p></p>
                    <p >  <img src={assest.rest_api} className="skill-icon " alt="" /> <p>React</p></p>                   
                </div>
            </div>
        </div>

        <div class="flip-card third">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">Familiar With</p>
                </div>
                <div class="flip-card-back">
                    <p > <FaJava className="skill-icon html"/> <p>Java</p></p>
                    <p > <RiTailwindCssFill className="skill-icon css"/> <p>Tailwind CSS</p></p>
                    <p > <SiPostman className="skill-icon postman"/><p>Postman</p></p>
                    <p > <VscVscode className="skill-icon react"/> <p>VS Code</p></p>                   
                </div>
            </div>
        </div>
  
        </div>
    </div>
  )
}

export default Skills