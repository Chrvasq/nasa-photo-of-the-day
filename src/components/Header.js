import React from "react";

const Header = props => {
  return (
    <div className="header">
      <h1>Astronomy Picture of the Day</h1>
      <p>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </p>
      <p>
        <span>{props.data.date}</span>
      </p>
    </div>
  );
};

export default Header;
