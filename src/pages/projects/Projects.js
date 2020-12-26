import React from 'react';
import { useSpring, animated } from 'react-spring';
import ProjectsList from '../../components/ProjectsList';
import './projects.css';

const Projects = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return(
        <animated.div style={fade} className='projects'>
            <h1 className='header'>Projects</h1>
            <ProjectsList />
        </animated.div>
    );
}

export default Projects;