import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../blog.css';
import { Link } from "react-router-dom";
import berlin1 from '../../../img/berlin1.jpeg';

const MovingBerlin = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about post'>
            <h1 className='header'>Moving to Berlin in 10 simple steps</h1>
            <img className='postImg' src={berlin1} alt="Berlin" />
            <p>I recently moved to Berlin. After taking care of everything around my departure I decided to compile this complete list of all the steps necessary for anyone to move to Berlin. Success is guaranteed.</p>
            <p><span className='bold'>Get a job offer for a position based in Berlin</span> — This is by far the easiest step. “Jobs are plenty, there’s nowhere to live”, goes the popular Berlin saying.</p>
            <p><span className='bold'>Take things slow</span> — Why worry, right? You got the job already! You agreed on starting in a month, because of your current notice period. A month is an eternity. Make an appointment with the Bürgeramt, though. You need to register yourself shortly after you arrive in the city. You don’t want to mess with the Bürgeramt.</p>
            <p><span className='bold'>Talk to friends, spread the info</span> — Make sure to let everyone know you’re moving to Berlin. That way, when things fall apart, you’ll have the opportunity to explain yourself in front of everyone about what went wrong. You’ll also gain the benefit of receiving thousands of eyerolls for the rest of your life every time you share another plan with your friends.</p>
            <p><span className='bold'>Casually start browsing for apartments</span> — Maybe it’s time to start looking at places to live. You’ve heard from others that it takes time, so you want to have at least 1–2 weeks of applying for apartments. This should be enough.</p>
            <p><span className='bold'>Start applying for a room in a shared flat</span> — OK, looking for an apartment just for yourself is beyond your capabilities, both financially and administratively. You have to settle for living with flatmates. That’s more fun anyway. Plus, you’ve done it before when you were a student, remember? It was fun back then. Apply for 1 or 2 offers on WG-Gesucht and put all your hopes in either of those alternatives. Start planning your daily routes around your future apartment.</p>
            <p><span className='bold'>Realize the gravity of the situation</span> — After the 20th application you still haven’t received any replies (except for that scammer who wanted to send you the keys via DHL). Time is drawing near and by the looks of it you don’t seem to have anywhere to live when you arrive in Berlin. There’s always Airbnb, but that would surely be way more expensive. Panic mildly.</p>
            <p><span className='bold'>Go on a application frenzy</span> — Spend most of your remaining free time applying for whatever offer pops up on WG-Gesucht. Don’t even read the descriptions. It doesn’t matter where it’s located, who lives there or how many cats are living in the apartment. You need a roof, fast.</p>
            <p><span className='bold'>Find a temporary solution</span> — Receive news from a friend, who has a friend, who lives in Berlin. He lives in a huge flat together with his mates and has a big couch that you can sleep on until you find a better alternative. The 4am nervous contemplations reduce to just casual nail biting during the day.</p>
            <p><span className='bold'>Find the next temporary solution</span> — Finally someone replies to your application for a room. The original owner of the room is away for two weeks and that’s the only time the room would be available, but you’re still happy because things are moving forward. You have a plan now. Stay with your friend’s friend first, then go to this temporary room for two weeks, then figure it out.</p>
            <p><span className='bold'>Arrive in Berlin</span> — Become totally overwhelmed by the sheer size, diversity and organisation of the city. Marvel about all the incredible places you can go, all the events you can attend and all the people you can meet. Explore the endless possibilities of the city and bare in mind that the struggle is far from over.</p>
            <p>And there you have it — 10 easy steps to settling down in Berlin. Coming soon — “Going back to your home city after being in Berlin in 10 simple steps”.</p>
            <h2 className='data'><Link to='/blog'>←Back</Link></h2>
        </animated.div>
        )
    }

export default MovingBerlin;