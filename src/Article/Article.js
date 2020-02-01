import React from 'react';
import './Article.css';

const Article =({title, created, post, id}) => {
    const getCreatedDate = (date) => date.substr(0,10);

    if(!id) return <div>In progress</div>

    return (
        <div className='Article'>
            <h3 className='Article__title'>{title}</h3>

            <div className='Article__post' dangerouslySetInnerHTML={{__html:post}}>
            </div>

            <div className='Article__created' >
                {getCreatedDate(created)}

            </div>

        </div>
    )
};

export default Article;