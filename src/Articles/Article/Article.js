import React from 'react';
import './Article.css';

const Article =({title, created, post}) => {
    return (
        <div className='Article'>
            <div className='Article_title'>{title}</div>

            <div className='Article__post'>
                {post}
            </div>

            <div className='Article__created'>
                {created}
            </div>

        </div>
    )
};

export default Article;