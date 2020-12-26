import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../blog.css';
import { Link } from "react-router-dom";

const RemoteWorkFamily = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about post'>
            <h1 className='header'>Starting a family? Here's why you should consider remote work.</h1>
            <p>About a year and a half ago when I started working remotely at Melewi I was super excited about having the freedom to decide where to work from and how to organize my productive hours. Up to that point, I’d heard and read a lot about the remote lifestyle, digital nomadism and the romanticized vision of traveling and working independently. I was definitely eager to try it out myself. I had no idea at the time that just 16 months later, I’d be a dad and working remotely would pose far greater benefits.</p>
            <p>The first couple of weeks after having a baby are probably the hardest (although many people will argue it’s actually 12 years later). You’re still not sure what’s happening and you feel like every false move you make will mess up your kid for life. I’m really glad I got to share this moment with my partner, so we can stress out together and laugh about it later on.</p>
            <p>When you’re expecting a kid, it’s easy to fall into the Google trap, researching all the things that can go wrong. One of them is Postpartum Depression. It’s a form of depression women often develop right after birth, because of the sudden drop of hormone levels. The reasons for its onset are chemical and psychological, but also social, so among the recommendations for avoiding and coping with PPD is to nurture the relationship with your partner.</p>
            <p>As you might’ve guessed, this is where working from home comes in quite handy.</p>
            <p>Sure, sometimes companies allow the father/second parent 2 weeks of time off (in addition to the mother’s parental leave) to help out with whatever he or she can in those tough first weeks. Beyond that, the mother is left to care for the child, while the other parent has to go back to work. Working remotely gives you the freedom not to separate those two.</p>
            <p>Without a doubt, working from home is a huge plus when it comes to getting used to this new life of being a parent. I can take a break from work to have lunch together with my girlfriend or help out with house chores. Even if I’m just sitting in the next room, having a call with someone on the other side of the planet, it helps her know that she’s not alone in this and it helps me get used to being a dad, without having to keep a photo of my kid on my office desk.</p>
            <p>It also allows me to help out with whatever I can — at this early stage, the baby largely depends on the mother for food, which makes me feel a bit helpless. What I can do instead is to try and make her life easier, so she can focus on breastfeeding and regaining strength.</p>
            <p>Working from home gives me a chance to spend more time with my kid — something I feel both of us will appreciate in the future too. Previously, remote working was something accessible only to a specific group of people — mainly solo entrepreneurs, freelancers, and software developers. I’m glad that changed. With advancing technologies, almost every task can be done remotely, so you don’t really have to get separated from your family to do work.</p>
            <p>Having a kid is no joke. It takes its toll both on the body and the mind and nobody should have to go through it alone. Working remotely doesn’t only mean typing away on your laptop from tropical beaches or cozy cafes. It also means providing your new family with the moral and physical support they need.</p>
            <h2 className='data'><Link to='/blog'>←Back</Link></h2>
        </animated.div>
        )
    }

export default RemoteWorkFamily;