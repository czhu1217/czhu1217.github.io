import React from 'react';
import './footer.css'

const Footer = () => {
    return(
        <div>
            <p className='footer'>© 2020 - Rumen Manev</p>
            <ul className='social'>
                <li><a href='https://twitter.com/room_n'>Twitter</a></li>
                <li>——</li>
                <li><a href='https://linkedin.com/in/rmanev'>LinkedIn</a></li>
                <li>——</li>
                <li><a href='https://medium.com/@room_n'>Medium</a></li>
                <li>——</li>
                <li><a href='https://github.com/rum-n'>GitHub</a></li>
            </ul>
        </div>
    );
}

export default Footer;