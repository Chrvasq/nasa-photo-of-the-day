// global styled components to be used in other components
import styled from "styled-components";

const BoldSpan = styled.span`
  font-weight: bold;
`;

const Para = styled.p`
  padding: 12px;
  text-align: justify;
`;

const H1 = styled.h1`
  ${props => (props.type === "header" ? `color: blue;` : null)}
  ${props => (props.type === "article" ? `color: red;` : null)}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => (props.type === "article" ? `width: 70%;` : null)}
`;

export { BoldSpan, Para, H1, Wrapper };
