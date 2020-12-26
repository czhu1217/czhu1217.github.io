import React from 'react';
import { useSpring, animated } from 'react-spring';
import './about.css'

const About = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about'>
            <h1 className='header'>About</h1>
            <p>Most of the time I'm working as a business developer and partnerships manager at <span className='people'><a href="https://melewi.net">Melewi</a></span> - a travelling UX & UI design studio.</p>
            <p>The rest of time I'm either running, climbing, skiing or working on a personal side project.</p>
            <p>I might also be up in the mountains or down by the sea, depending on the season. The point is I'm trying to stay active.</p>
            <p>In the past few years, I've been semi-actively getting into web technologies, data science, <span className='data'><a href="https://www.medium.com/@room_n">writing</a></span>, e-commerce and everything else I find interesting. If you have something you want to share or just want to say hi, feel free to <span className='interests'>drop a line.</span></p> 
            <p>In the meantime - here's a <span className='listen'><a href="https://open.spotify.com/user/room_n/playlist/5bpb7U0wi2OCYkVVl5xY8G?si=u3qK0TOHQ525aOxZffCuOw">playlist</a></span> you can listen to while you work.</p>
        </animated.div>
        )
    }

export default About;