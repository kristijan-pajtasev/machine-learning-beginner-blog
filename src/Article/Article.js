import React from 'react';
import './Article.css';
import Loading from "../Loading";

const Article =({id}) => {
    const getCreatedDate = (date) => date.substr(0,10);

    if(id) return <Loading />

    // return (
    //     <div className='Article'>
    //         <h3 className='Article__title'>{title}</h3>
    //
    //         <div className='Article__post' dangerouslySetInnerHTML={{__html:post}}>
    //         </div>
    //
    //         <div className='Article__created' >
    //             {getCreatedDate(created)}
    //
    //         </div>
    //
    //     </div>
    // )
};

export default Article;