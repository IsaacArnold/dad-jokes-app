import React from "react";
import JokeContent from "./JokeContent";
import Button from "./Button";
import Title from "./Title";

const JokeWrapper = (props) => {
  return (
    <React.Fragment>
      <Title />
      <JokeContent joke={props.joke} />
      <Button getNewJoke={props.newJoke} />
    </React.Fragment>
  );
};

export default JokeWrapper;
