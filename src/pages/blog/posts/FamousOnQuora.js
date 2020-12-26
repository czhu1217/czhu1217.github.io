import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../blog.css';
import { Link } from "react-router-dom";
import quora3 from '../../../img/quora3.png';
import quora2 from '../../../img/quora2.png';
import quora1 from '../../../img/quora1.png';

const FamousOnQuora = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about post'>
            <h1 className='header'>How to become famous on Quora</h1>
            <p>Quora is one of the lesser used social media platforms when it comes to marketing a company or product. There’s enough resources about posting on Facebook, Instagram and Twitter, but fewer entrepreneurs make efforts to reach their audience on Quora. If I had to guess, the reason probably is that the ROI of using other social media is more noticeable and results are more tangible. It’s way more acceptable and even expected that you post a direct link to your website on Facebook or Twitter. That is big no-no on Quora (I’ll mention this later on). Investing your time to write on Quora is a long-term effort — you shouldn’t expect too big of a result immediately.</p>
            <img className='postImg' src={quora1} alt="Rumen Manev on Quora" />
            <p>“Wait, but you’re far from famous on Quora, why should I listen to you?”</p>
            <p>Shut up.</p>
            <h3>The Basics</h3>
            <p>For those of you that only know Quora through that one link that appeared on top of Google when you wanted to know how Gouda is made, it’s essentially a questions & answers platform, where people can post whatever question comes to mind and other people can give their best answer.</p>
            <p>“Wait, so like Yahoo Answers?”</p>            
            <p>Yes, but less shitty.</p>
            <img className='postImg' src={quora2} alt="Quora answer" />
            <p>While both Quora and Yahoo Answers have utilised the power of gamification to make people strive to give their best answers and receive the most “upvotes”, Quora’s UX & UI are far superior, which makes the platform more user-friendly to navigate and easier to follow certain people (which is why Quora can be considered a social media and Yahoo Answers not so much). This feature of following people’s profiles is one of the things that make Quora an excellent place to market your idea or product.</p>
            <p>You see, when you give an answer on any question on Quora, besides your name you also have this one-liner, which tells a little bit about you and why you should be considered an authority on answering said question. Placing your company’s name in that one liner makes it possible for thousands, in some cases even hundreds of thousands of people to see your answer and your company’s name.</p>
            <h3>So what makes a good answer?</h3>
            <p>A good answer to a question usually means its extensive and provides all the necessary information to help the asking person make a better decision. In the context of Quora, there’s more to it than that. There’s a huge amount of people, who can give more or less the same piece of information, so you have to do more than just list facts.</p>
            <p>There’s a couple of easy tricks you can do that will make your replies really stand out. For starters, always aim to include humour and personal stories when writing an answer. The readers will find it much easier to digest the information if they can relate to an everyday human story. A good example of this is Dushka Zapata, who always turns a seemingly trivial encounter into a story with a relevant outcome to the asked question. If you start following successful writers on Quora you’ll notice that probably all of them will add an image to the answers they post. It shouldn’t be a surprise that people respond better to an image than to a wall of text. It’s a relatively easy thing to do, but will make a huge difference. Make sure that the image is free to use (you can use sites like Unsplash to find something relevant).</p>
            <p>Format your answer for better readability. This one is pretty important. Compose your answer to deliver the information as effortlessly for the reader as possible. This means having clear paragraphs for important points and separate topics. The paragraphs shouldn’t be too long (1 to 3 sentences max) so that it’s easier on the eye when reading on mobile.</p>
            <p>Bold crucial statements and put questions & quotes in italic. Avoid unnecessary words like “very”, “really” or “definitely”. Also, use bullet points whenever you need to list more than 2 things. Again, those are a few easy things to do that will make a heavy impact on your views.</p>
            <p>It’s also a good idea to give your answer a positive ending. Imagine your answer like a short story. Like every good story it should have an intro, a problem and a resolution. Ending on a positive note will inspire your readers and leave them with a warm feeling. Probably the most important thing to remember (and something I’ve seen so many people get wrong) is never to directly promote whatever you want to promote. Even if everyone knows people provide answers in order to get noticed and plug their business, whenever you post a direct link to your service, your reputation will inevitably go down. It’s way too sales-y and not at all what the Quora community is about — sharing knowledge.</p>
            <h3>The biggest success</h3>
            <p>The highest form of recognition on Quora is to be published in one of their partner media outlets, e.g. Time, Inc Magazine, The Huffington Post. Of course, the first thing to do in order to get published is to write an exceptional answer. You can, however, increase your odds by following a few simple steps. You can carefully research what topics are frequently being published by the Quora media team and aim to reply to questions in exactly those topics.</p>
            <p>“How do I find those topics?”, I hear you asking.</p>
            <p>Find a Quora user with the title “Quora Media and Publishing Team”. Go to their profile and look through the topics and people they follow. This will give you an idea of where they’re most likely to look for quality content to submit for publishing.</p>
            <p>After that it’s all about writing an excellent answer in one of those topics and remembering to follow the guidelines I mentioned above. Focus on questions that warrant an answer with actionable steps and advice that can actually be implemented by the reader.</p>
            <p>There will surely be a huge amount of questions, so naturally, it’ll be impossible to submit quality answers to each one of them. Instead, aim for those that have the most followers. This means they’ll be seen by more people and the chance of them getting picked up by the publishing team will be higher.</p>
            <h3>The ultimate goal</h3>
            <p>You started the long journey of becoming a Quora writer so you can get noticed and showcase your work to the world. That’s exactly what you need to do with your profile. When you become good at writing on Quora, people will visit your profile and follow you. You need to make sure that, same as the posts you write, you provide relevant information in an easy-to-read manner.</p>
            <p>This is the place to expand on your Quora one-liner people see every time you post an answer. Start with the essence of what you do summarised in one sentence.</p>
            <p>Then, provide links to your other projects or whatever you want to lead people to. If you have some memorable Quora submission you can boast with, it’s an excellent idea to put links of them as well. This will bring even more views to those quality answers in an organic way.</p>
            <img className='postImg' src={quora3} alt='Nelson Wang on Quora' />
            <p>Quora is about providing knowledge and perspective as much as it’s about being human and sharing your personal experience others can relate to. In a world of fake profiles and pretend images what truly stands out is a sincere approach to bringing value to others.</p>
            <h2 className='data'><Link to='/blog'>←Back</Link></h2>
        </animated.div>
        )
    }

export default FamousOnQuora;