import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
    <h2>VELAN</h2>
    <ul>
        <li> <a href="#Home">Home</a></li>
        <li><a href="#About">About Me</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Project">Project</a></li>
        <li><a href="#Contact">Contact Me</a></li>
    </ul>
</nav>
  )
}

export default Navbar