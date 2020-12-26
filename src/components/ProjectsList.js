import React, { useState } from 'react';
import ProjectCard from './projectCard/ProjectCard';
import projectsData from './projectsData';

const ProjectsList = () => {
    const [data] = useState(projectsData);
    
    return(
        data.map((project) => (
        <ProjectCard 
            key = {project.id}
            link={project.link}
            title={project.title}
            image= {project.image}
            blurb={project.blurb}
            techstack={project.techstack}
        />
        )
    ));
}

export default ProjectsList;