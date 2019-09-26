import React from "react";
import { BoldSpan, Para, H1, Wrapper } from "./Global";

const Article = props => {
  return (
    <Wrapper type='article'>
      <H1 type="article">{props.data.title}</H1>
      <Para>
        <BoldSpan>Explanation:</BoldSpan> {props.data.explanation}
      </Para>
    </Wrapper>
  );
};

export default Article;
