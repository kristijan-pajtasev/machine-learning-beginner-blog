import React, {useState, useEffect} from 'react';
import './MLBlog.css';
import Header from "./Header";
import Loading from "./Loading";
import Articles from "./Articles";

function MLBlog() {
    const [articles,setArticles] = useState(null);
    useEffect(() => {
        fetch('/posts').then(res => res.json().then(data => {
            console.log(data);
            setArticles(data);
        }));

    }, []);

  return (
    <div className="App">
        <Header/>
        {articles ? <Articles articles={articles} /> : <Loading />}
    </div>
  );
}

export default MLBlog;
