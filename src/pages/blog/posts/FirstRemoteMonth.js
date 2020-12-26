import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../blog.css';
import { Link } from "react-router-dom";

const RemoteMonth = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about post'>
            <h1 className='header'>How to become famous on Quora</h1>
            <p>People have been writing about it left and right for years. Articles, blog posts even books. Just like any other fad, every aspect of working remotely has been covered extensively. You’ve most likely heard both the good and the bad sides of location independent work. If not from those articles, at least from that someone you know, who’s doing something that has to do with social media, but from home. Well, it just so happened that I recently ventured into the world of remote work. This is what I think after a month doing it.</p>
            <h3>It’s not all beachers and hipster cafes</h3>
            <p>So initially I was supposed to go to Berlin and start a job at this company based in the city. As it turns out, often times things like to go on their own way. I was contacted by another company and eventually started working for them — remotely. In fact, it’s not just me — every team member at Melewi works independently from a location of their choosing.</p>
            <p>At first, I went to work from various cafes, seriously increasing my caffeine intake and comfortably mixing in with the crowd of MacBook users. Berlin is perfect for that, since it has an abundance of cafes attracting freelancers and remote workers (and people with MacBooks).</p>
            <p>For a while it feels good to have this excitement of working from an unfamiliar place every day. Then after about two week, every cafe looked and felt pretty much similar to the previous one. Not long after that, it seemed like more of a hassle to think about where I should work from today, plan my route, think about where I should eat and all those little things that you don’t normally consider straight away.</p>
            <p>The workload was also smaller in the beginning. But as the onboarding process went on I gradually got more and more responsibility and suddenly I had a number of tasks that I needed to finish before a deadline. Then I started noticing that all this time running around from point A to point B to point C back to point B actually accumulates and becomes a significant part of my day.</p>
            <p>It’s good to diversify from time to time by working from a cafe, but doing it every day turns into a mundane routine by itself, which sort of defeats the purpose of location independent work.</p>
            <p>To be honest, I have colleagues that like to work from their favourite cafes and that works for them. Maybe after doing it for a while it turns into a process and you increase your efficiency, which compensates the commute to different venues. It didn’t work for me at this stage.</p>
            <h3>It’s work as usual</h3>
            <p>From what I’ve seen so far I feel like the general perception of remote work is that it’s way more relaxed than working from an office. This is only partly true.</p>
            <p>For those that think working from home is more relaxed because of the fewer external distractions — it’s absolutely right. There’s no team members interrupting you for a second to get your opinion on this and this. Or getting into a 20 minutes meeting that turns into a 1 hour discussion.</p>
            <p>But for those who think it’s more relaxed because you’ll be able to slack off and have more time, this is completely wrong. Working remotely usually requires a lot more of you justifying what you do. Sure, you can distribute your working hours at your convenience, but that doesn’t mean those hours will be less than with a traditional job.</p>
            <p>In fact, as <a className='data' href='https://medium.com/@jasonfried'>Jason Fried</a> often points out, one of the risks of remote work is overworking. A lot of people have trouble setting straight boundaries between working hours and free time.</p>
            <p>It’s natural, if you think about it. You have tasks that you want to follow up with or you suddenly think of something you have to discuss with one of your colleagues, who happens to be online. Too bad it’s 12am.</p>
            <p>You need to be conscience about doing focused work during the times you’ve set aside for working and give your mind a chance to relax during the time you set for leisure.</p>
            <h3>Some extra effort</h3>
            <p>There’s things about working remotely that are not apparently obvious until you find yourself in that situation. One of them is the extra effort you need to put with otherwise trivial activities such as basic communication.</p>
            <p>There’s already a physical distance between me and my colleagues. I need to be extra mindful of the way I exchange information, collaborate or even argue. Doing those things face-to-face allows all sides in the conversation to gain this additional insight through body language and tone of voice.</p>
            <p>When you work from home the only thing you have is real-time text or facial expressions at best, if you’re doing a video conference (which we aim to do as much as possible). You need to be careful not to create an even further distance between you and your team mates through the way you communicate.</p>
            <p>Another thing I had to be mindful about is distractions at home. In the office, it can be needy colleagues. At home, it’s all those side things I suddenly think about that I need to do.</p>
            <p>That lamp you haven’t had the time to put on? Cleaning the basement? Fixing your bike? All good, just bare in mind you still have a job that needs to be done with priority. What I mentioned above about focused work is true here as well. You need to create a strict discipline, relying only on yourself.</p>
            <p>In an office, there’s other people watching you, which makes you stare at the screen during office hours (how much people work still depends largely on themselves). At home you need to be the one to watch out for distractions.</p>
            <p>To be fair, this won’t be an issue, if you love what you’re doing. Working on diverse projects, having supportive colleagues and learning new skills every week will make any distractions insignificant.</p>
            <h3>To conclude</h3>
            <p>The last month has been a rollercoaster. Starting a new job completely changes your habits and daily routine, even more so if it’s a shift from an office job to a remote one. It takes some time and effort to adjust and get better at it. Often times it can be a bit more complicated than doing a 9-to-5, but I believe the personal experience and freedom you get in return are well worth the effort.</p>
            <h2 className='data'><Link to='/blog'>←Back</Link></h2>
        </animated.div>
        )
    }

export default RemoteMonth;