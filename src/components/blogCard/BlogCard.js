import React from 'react';
import './blogCard.css';

const BlogCard = (props) => {
    return (
    <div className='blogContent'>
        <div className='blogCard'>
            <p className='blogName data'>{props.title}</p>
            <p className='blogBlurb'>{props.blurb}</p>
            <p className='blogDate people'>{props.date}</p>
        </div>
    </div>
    );
}

export default BlogCard;