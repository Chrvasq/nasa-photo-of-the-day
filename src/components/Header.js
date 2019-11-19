import React from "react";
import { BoldSpan, Para, H1, Wrapper } from "./Global";

const Header = props => {
  return (
    <Wrapper>
      <H1 type="header">Astronomy Picture of the Day</H1>
      <Para>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </Para>
      <Para>
        <BoldSpan>{props.data.date}</BoldSpan>
      </Para>
    </Wrapper>
  );
};

export default Header;
