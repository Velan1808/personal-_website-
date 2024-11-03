import React from 'react'
import "./About.css"
import assest from '../../assests/assest'

const About = () => {
  return (
    <div id='About' className="about">
        <hr />
        <h1>About Me</h1>
        <div className="content">
            <div className="image">
                <img src={assest.my_img} alt="" />
            </div>
            <div className="details">
            <span className='point'>.. .</span>I am Velan, a recent BE graduate from the class of 2024 with a strong foundation in full-stack web development. My skill set includes HTML, CSS, JavaScript, Java, and the entire MERN stack (MongoDB, Express.js, React, and Node.js), along with proficiency in Tailwind CSS. I am passionate about creating seamless and interactive web applications, and I am constantly enhancing my coding knowledge to stay updated with new technologies. My journey in full-stack development has been hands-on, enabling me to bring efficient solutions to dynamic projects.
            <br /><br />
            <span className='point'>.. .</span>Throughout my development journey, I have built several projects, including a comprehensive food delivery application that features separate frontend, backend, and admin panels. Additionally, I developed a blog application with full CRUD functionality and user authentication, as well as a YouTube clone using React and the YouTube API. Each of these projects has sharpened my skills in building responsive interfaces, managing data flow, and developing robust server-side logic. I am eager to bring my skills and commitment to new and impactful projects. </div>
        </div> 
        
    </div>
  )
}

export default About