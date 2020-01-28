import React from 'react';
import './MLBlog.css';
import Header from "./Header";
import Articles from "./Articles";

function MLBlog() {
  return (
    <div className="App">
        <Header/>
        <Articles />
    </div>
  );
}

export default MLBlog;
