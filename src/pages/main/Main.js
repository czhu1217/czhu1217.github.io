import React from 'react';
import {useSpring, animated} from 'react-spring';
import './main.css';

const Main = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return(        
        <animated.div style={fade}>
            <h2 className='heading'>Creating stuff for the <span className="interests">web</span>, <br/> out of personal <span className="people">interest</span> and occasionally ⁠— for other <span className='data'>people</span>.</h2>
        </animated.div>    
    )
};

  export default Main;