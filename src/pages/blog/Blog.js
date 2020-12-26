import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";
import './blog.css'
import BlogCard from '../../components/blogCard/BlogCard';

const Blog = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about'>
            <h1 className='header'>Blog</h1>
            <Link to='/starting-a-family-remote-work'>
            <BlogCard 
                title='Starting a family? Here’s why you should consider remote work.' 
                blurb='About a year and a half ago when I started working remotely at Melewi I was super excited about having the freedom to decide where to work from and how to organize my productive hours[...]' 
                date='Aug 22, 2019'
            />
            </Link>

            <Link to='/how-to-write-better-proposals'>
            <BlogCard 
                title='How to write better proposals and close more deals' 
                blurb='Let me paint this hypothetical picture for you — you’ve just finished an initial sales call or live meeting with a prospective client. The meeting went really well[...]' 
                date='Jan 4, 2019'
            />
            </Link>

            <Link to='/how-to-become-famous-on-quora'>
            <BlogCard 
                title='How to become famous on Quora' 
                blurb='Quora is one of the lesser used social media platforms when it comes to marketing a company or product. There’s enough resources about posting on Facebook, Instagram and Twitter, but fewer entrepreneurs make efforts to reach their audience on Quora.[...]' 
                date='Apr 16, 2018'
            />
            </Link>

            <Link to='/my-first-month-of-working-remotely'>
            <BlogCard 
                title='My First Month of Working Remotely' 
                blurb='People have been writing about it left and right for years. Articles, blog posts even books. Just like any other fad, every aspect of working remotely has been covered extensively[...]' 
                date='Mar 14, 2018'
            />
            </Link>

            <Link to='/the-case-of-the-berlin-public-transport'>
            <BlogCard 
                title='The Case of the Berlin Public Transport - user engagement, the right way' 
                blurb='Berlin has one of the most amazing public transportation systems in the world, I kid you not. Coming from a city with disastrous transportation options, my opinion might seem exaggerated[...]' 
                date='Feb 28, 2018'
            />
            </Link>
            <Link to='/moving-to-berlin-in-10-simple-steps'>
            <BlogCard 
                title='Moving to Berlin in 10 simple steps' 
                blurb='I recently moved to Berlin. After taking care of everything around my departure I decided to compile this complete list of all the steps necessary for anyone to move to Berlin. Success is guaranteed[...]' 
                date='Nov 23, 2017'
            />
            </Link>            
        </animated.div>
        )
    }

export default Blog;