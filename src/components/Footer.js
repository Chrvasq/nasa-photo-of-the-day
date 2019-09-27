import React from "react";

const Footer = props => {
  return (
    <div className='footer'>
      <p>
        <span>Image Credit & Copyright: </span>
        {props.data.copyright}
      </p>
    </div>
  );
};

export default Footer;
