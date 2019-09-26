import React from "react";

const Article = props => {
  return (
    <div className="article">
      <h1>{props.data.title}</h1>
      <p>{props.data.explanation}</p>
    </div>
  );
};

export default Article;
