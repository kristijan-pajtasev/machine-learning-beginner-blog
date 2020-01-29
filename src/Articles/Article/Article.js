import React from 'react';
import './Article.css';

const Article =({title, created, post}) => {
    const getCreatedDate = (date) => date.substr(0,10);

    return (
        <div className='Article'>
            <h3 className='Article__title'>{title}</h3>

            <div className='Article__post'>
                {post}
            </div>

            <div className='Article__created'>
                {getCreatedDate(created)}
            </div>

        </div>
    )
};

export default Article;