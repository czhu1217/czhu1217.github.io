import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../blog.css';
import { Link } from "react-router-dom";
import bvg1 from '../../../img/bvg1.png';
import bvg2 from '../../../img/bvg2.jpeg';
import bvg3 from '../../../img/bvg3.jpeg';

const BVG = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about post'>
            <h1 className='header'>The Case of the Berlin Public Transport - user engagement, the right way</h1>
            <p>Berlin has one of the most amazing public transportation systems in the world, I kid you not. Coming from a city with disastrous transportation options, my opinion might seem exaggerated. But having been in cities like Stockholm, Copenhagen and Singapore, I still think the BVG or Berliner Verkehrsbetriebe (Berlin Transportation Services) remains unrivalled. I’m not just saying this because of the impeccable timing of every U-Bahn or the 24 hours transport on weekends or the way the institution handles line repairs by introducing temporary substitutions. One of the things that distinguishes the BVG is the brand identity they’ve built through the years and the unusual way they engage with their audience.</p>
            <h3>Some general information first</h3>
            <img className='postImg' src={bvg1} alt="Berlin map" />
            <p>Berlin is divided into 3 zones in terms of public transport — A, B and C. Zone A is basically Mitte, Charlottenburg, Gesundbrunnen, Kreuzberg, Friedrichshain and the better part of Neuköln. Pretty much where most of the good stuff happens. Zone B is that place you go to when someone tells you there’s a neurofunk party at an abandoned industrial building. And you generally go to Zone C when you have to catch an airplane from Schönefeld.</p>
            <p>The tickets available are either AB, BC or ABC and they’re valid for every form of public transport you see out there. That includes Bus, Tram, U-Bahn (subway) and S-Bahn (train). You can get out from one vehicle and switch to any number of others in any given direction (return trips not included) within a 2-hour limit.</p>
            <p>Getting a ticket is easier than posting an instagram story. You just fire up the BVG app and you buy that little rascal with exactly 3 clicks. Your phone knows which station you’re at so it’ll be marked on your ticket, which will then help the BVG inspectors determine whether you’re a law-abiding citizen or a Schwarzfahrer (direct translation: black rider?).</p>
            <p>OK, so far I’ve covered how effectively the Berlin transport system is organised, but I guess that doesn’t really impress you so much. I mean, it’s Germany — anyone would expect a punctual, high-functioning public service. So why am I bothering to write about it?</p>
            <h3>The BVG brand</h3>
            <img className='postImg' src={bvg2} alt="Berlin subway" />
            <p>About 3 years ago, the BVG decided it needs to get on the social media train. (see what I did there?). They created their new Facebook, Twitter and Instagram accounts and adopted the slogan “Weil wir dich lieben” (“Because we love you”). Immediately after that, they probably felt as if they’d opened Pandora’s box. Like any public service in every country on this planet, they were (and still are) the subject of constant critique and discontent from the people using it.</p>
            <p>Bad tempered bus drivers, late trams, broken seats, dirty train carts and so on and so on. After all, a city’s public transport is a places where people feel quite miserable by default. It’s the place that you go to right after you’ve woken up from your comfy bed, it’s filled with all those other people you don’t know and don’t necessarily smell good and it’s supposed to bring you to your work. Then, after you finish work and you feel super tired from the bullshit you had to deal with all day, you’re supposed to get on it again so it can bring you home.</p>
            <p>Just by existing, it’s already quite a shitty place to spend your time. All it takes is one grumpy driver for a person to snap. This built up pressure got released as soon as people had the means to communicate with the BVG. And their new slogan got people even more fired up. “Because we love you”? It’s as if the BVG was mocking them.</p>
            <p>The challenging task of running all social media accounts, was given to Peter Wittkamp and Finn Kirchner, both previously working as writers for various comedy shows. They’re mission was to make people believe in the BVG slogan. Their approach? Unconditional self-irony.</p>
            <p>The Berlin public transport is being used by more than a billion people per year. When things go wrong, they go wrong for a massive number of folks. A lot of the subway carts, as well as subway stations are old and need renovation. Bus drivers and conductors are often grumpy and if you’ve ever been to Berlin you can imagine what the subway looks like on Sunday mornings. These are all issues that the BVG cannot immediately fix.</p>
            <img className='postImg' src={bvg3} alt="Berlin subway" />
            <p>So instead of ignoring what people were complaining about, especially the things that were beyond the power of the administration, the voices of the BVG started making jokes about it. Their idea was to create a brand around the chaotic, smelly, trashy environment that is the public transport system. It’s the perfect reflection of what the actual city is about. Berlin can be dirty, messy and rough, but this is exactly what grew to be its charm. In a way, the BVG perfectly captures what Berlin is about —sure, it has its issues, but that’s what makes it so special.</p>
            <p>The BVG public voice is humorous and somewhat unapologetic. Apart from the cheerful posters, the its social profiles are very much active and people who address the BVG often get a response fairly quickly, albeit a response that usually makes a joke out of them.</p>
            <p>Still, there are limits to what the BVG jokes about. Serious complaints are beyond the line of light-hearted responses. But as far as force majeure circumstances go, such as 5 minute delays, bad weather or someone puking on your shoes at the subway station — the BVG will push the limit to socially acceptable humour. And people will appreciate it.</p>
            <h3>We love you too, BVG</h3>
            <p>Berlin is one of the most diverse cities in the world. It’s a city of 4 million people, all trying to go about their day (or night) and make a good living. It’s a messy place that combines excessive freedoms with the security of German laws. People here feel safe doing whatever rocks their boat, without the fear of anyone judging them (except maybe if you’re wearing a suit). It’s the perfect place for a sarcastic, “no-fucks-given” public transport to thrive in.</p>
            <p>And this is exactly the attitude it took to make people shift from complaining about ticket prices and dirty trains to sharing anecdotes with others online and adopting the Berlin public transport as one of the city’s most popular memes.</p>
            <p>The BVG managed to turn the mass feelings of disdain for petty issues into warm shrugs and sighs that say “that’s just our good old BVG”. And that is a feat in itself.</p>
            <h2 className='data'><Link to='/blog'>←Back</Link></h2>
        </animated.div>
        )
    }

export default BVG;