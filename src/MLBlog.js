import React, {useState, useEffect} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";
import Articles from "./Articles";
import Article from "./Article";
import './MLBlog.css';

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
        <Router basename="/">
            <Switch>
                <Route exact path="/posts" component={() => articles ? <Articles articles={articles} /> : <Loading />} />
                <Route path="/posts/:id" component={props => <Article id={props.match.params.id} />} />
                <Route exact path="/" component={() => articles ? <Articles articles={articles} /> : <Loading />} />
            </Switch>
        </Router>
    </div>
  );
}

export default MLBlog;
