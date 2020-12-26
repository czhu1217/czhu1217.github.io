import React from 'react';
import './projectCard.css';

const ProjectCard = (props) => {
    return (
    <a href={props.link}><div className='projectCard'>
        <p className='projectName data'>{props.title}</p>
        <p className='projectBlurb'>{props.blurb}</p>
        <p className='projectTech people'>{props.techstack}</p>
        <img className='projectCardImage' alt='Ski Dashboard' src={props.image} />
    </div></a>
    );
}

export default ProjectCard;