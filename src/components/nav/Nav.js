import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return(
        <header>
            <div className='menu'>
                <ul>
                    <Link to='/'>
                        <li>Intro</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/projects'>
                        <li>Projects</li>
                    </Link>
                    <Link to='/blog'>
                        <li>Blog</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}

export default Nav;