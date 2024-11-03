import React from 'react'
import "./Project.css"
import { project_list } from '../../assests/assest'

const Project = () => {



  return (
    <div id='Project' className='project'>
    <hr />
    <h1>My Project</h1>

    <div className='project-item'>
       {project_list.map((item, index)=>{
        return(
          <div key={index} className='project_card'>
              <div className='card-top'>
                  <img src={item.image} alt="" className=''  />
                  <h2 className=''>{item.project_name}</h2>
              </div>
              <p className='technology'>Technology: {item.technology}</p>
              <p className='details'>{item.description}</p>
              <div className='project-link'>
                  <a href={item.link } className=''>Preview</a>
                  <a href={item.github_link} className=''>Source</a>
              </div>
          </div>

        )
       })}
    </div>

</div>
  )
}

export default Project