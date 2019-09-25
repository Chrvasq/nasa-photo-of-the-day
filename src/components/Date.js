import React, {useEffect} from "react";

const DateComp = props => {
  useEffect(() => {

  })
  if (!props.date) {
    return <p>Loading...</p>;
  }
  return <p>{props.date}</p>;
};

export default DateComp;
