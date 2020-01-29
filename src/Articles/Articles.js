import React from 'react';
import Article from './Article';
import './Articles.css';

const Articles = ({articles}) => {
    return (
        <div className='Articles'>
            {articles.map(article => <Article {...article} key={`article-${article.id}`}/>)}
        </div>
    )
};

export default Articles;