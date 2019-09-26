import React from "react";

const Image = props => {
  return (
    <a href={props.data.hdurl} target="_blank" rel="noopener noreferrer">
      <img src={props.data.url} alt="Planet in the universe" />
    </a>
  );
};

export default Image;
