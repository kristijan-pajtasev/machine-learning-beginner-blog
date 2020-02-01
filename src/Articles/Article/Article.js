import React from 'react';
import './Article.css';

const Article =({title, created, description, id}) => {
    const getCreatedDate = (date) => date.substr(0,10);
    const replaceImages = text => text;
    const parseInlineElements = text => replaceImages(text);
    const getParsedArticle = text => text.split(/\n+/gi).map((paragraph, index) => <p key={`article_${id}_paragraph_${index}`}>{parseInlineElements(paragraph)}</p>)

    return (
        <div className='Article'>
            <h3 className='Article__title'>
                <a href={`#/posts/${id}`}>{title}
                </a>
            </h3>

            <div className='Article__post'>
                {description}
            </div>

            <div className='Article__created' >
                {getCreatedDate(created)}

            </div>

        </div>
    )
};

export default Article;