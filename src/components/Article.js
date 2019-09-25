import React from "react";

const Article = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.explanation}</p>
    </div>
  );
};

export default Article;
