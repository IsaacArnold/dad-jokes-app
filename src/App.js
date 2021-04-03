import React, { Component } from "react";
import "./App.scss";
import JokeWrapper from "./components/JokeWrapper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: [],
    };
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          joke: data.joke,
        });
      });
  };

  render() {
    console.log(this.state.joke);
    return (
      <div className="content-wrapper">
        <JokeWrapper joke={this.state.joke} newJoke={this.getJoke} />
      </div>
    );
  }
}

export default App;
