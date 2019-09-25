import React from "react";

const Header = props => {
  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <p>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </p>
      <p>{props.data.date}</p>
    </div>
  );
};

export default Header;
