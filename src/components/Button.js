import React from "react";

const Button = (props) => {
  return (
    <p onClick={() => props.getNewJoke()} className="button">
      Get a new joke
    </p>
  );
};

export default Button;
