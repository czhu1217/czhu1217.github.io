import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../blog.css';
import { Link } from "react-router-dom";

const BetterProposals = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    return (        
        <animated.div style={fade} className='about post'>
            <h1 className='header'>How to write better proposals and close more deals</h1>
            <p>Let me paint this hypothetical picture for you — you’ve just finished an initial sales call or live meeting with a prospective client. The meeting went really well. First you told them a little bit about your company and how you work, then they told you a little bit about their company and what they need. You asked some good questions, they gave you some valuable information. You both agreed on next steps — you’ll discuss with your team and get back to them with a time & cost estimate.</p>
            <p>Some days later you’re ready with the proposal. You feel confident about the piece of document you’ve assembled. It covers all the points mentioned during the meeting and lays out a clear plan of action. You’ve added some buffer time — just in case — and the total cost makes sense, considering the scope of work. You attach it to a friendly email and hit “Send”.</p>
            <p>A few days pass by. No reply.</p>
            <p>You follow up with an email. “Just wanted to make sure…”, “Let me know if there’s anything…”, “Feel free to…”.</p>
            <p>A week goes by. Still no reply. Maybe you received a short “Need more time to discuss internally”, but things are definitely not moving forward.</p>
            <p>Why didn’t it work out? Well, there can be a number of reasons, but one of them is certain — you didn’t present your proposal in person.</p>
            <p>When you send a PDF proposal per email, there’s a few things that immediately happen. Depending on the time of day you send it and how busy the receiving person is, they may glance at the email and leave a mental note to take a look at the proposal later. At which point they get into a whirlwind of distractions and forget about it. Until your next follow up, when things repeat.</p>
            <p>If they do open the document, that funky layout you prepared, those bullet points and convincing arguments will have little to no effect. The lead will immediately scroll down to the estimated project price, at which point, depending on their budget, they’ll either go back to check the rest of the proposal or exit the PDF and go about their day.</p>
            <p>Sometimes, they may be free enough (it’s really not a matter of courtesy) to let you know that you’re outside their budget, but most of the time this effort has no added value to them. You following up endlessly will increase their value in replying, by making you stop filling their inbox, but the end result is the same — your proposal won’t be accepted.</p>
            <p>Now, consider getting on a call (ideally with video) or setting up a personal meeting and presenting your proposal to the lead.</p>
            <p>This gives you control of the conversation and makes you determine what information your lead will see at which point in time. You can start with some chit-chat, transition to your action plan, go through all the points from your proposal, justify the time needed and emphasise the value you’ll bring to your client and the benefits they’ll get from paying the price you estimated.</p>
            <p>Ideally, by the time you get to your price estimate, they’ll have the full picture of how you came to that price and they’ll understand what they’ll be getting in exchange for that fee.</p>
            <p>If the price is still too far outside their budget, there’s only little more you can do. But this way you’ll certainly have a much higher chance of persuading them to pay this price by creating a conversation, instead of a one-sided interaction with your document. Having this conversation allows you to witness the immediate reaction of your lead and gives you an opportunity to counteract any negative feelings they may be having on the spot.</p>
            <p>This is a crucial moment, because you can steer the conversation in the direction you want — ask them questions and understand their objections. Often times, when they reply to your emailed proposal with rejection, you won’t get an explanation. They’ll only say they’ve chosen to go with another partner, but unless you specifically ask for feedback, they’ll rarely mention this themselves — and by the time they do, it’ll be too late.</p>
            <p>So, increase your chances of getting a “yes” to your proposal by creating a conversation with your lead and maintaining an interaction. Of course, a lot also depends on the quality of your presentation, but that’s a topic for another time.</p>
            <h2 className='data'><Link to='/blog'>←Back</Link></h2>
        </animated.div>
        )
    }

export default BetterProposals;