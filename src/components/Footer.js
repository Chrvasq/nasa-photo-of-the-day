import React from "react";
import { BoldSpan, Para } from "./Global";

const Footer = props => {
  return (
    <div className="footer">
      <Para>
        <BoldSpan>Image Credit & Copyright: </BoldSpan>
        {props.data.copyright}
      </Para>
    </div>
  );
};

export default Footer;
