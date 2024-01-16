import React from 'react'
import './Projects.scss'

const Projects = () => {
  return (
    <div className='projects-main-div'>
        <div className="heading">
            <h1>My Latest <span>Projects</span></h1>
        </div>
        <div className="projects_main">
            <div className="project-items"><img src="./project 1.png" alt="" /></div>
            <div className="project-items"><img src="./project 2.png" alt="" /></div>
            <div className="project-items"><img src="./project 3.png" alt="" /></div>
        </div>
    </div>
  )
}

export default Projects
