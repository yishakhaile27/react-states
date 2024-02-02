import React, { Component } from 'react';
import CounterDisplayer from './CounterDisplayer';

class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }));
  };

  evenClicksCounter = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }));
    this.setState((prevState) => ({
      evenClickCount: prevState.clickCount % 2 === 0 ? prevState.evenClickCount + 1 : prevState.evenClickCount,
    }));
};

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click me</button>
        <CounterDisplayer count={this.state.clickCount} />
        <button onClick={this.evenClicksCounter}>Click me</button>
        <CounterDisplayer count={this.state.clickCount} />
        <EvenCounterDisplayer evenCount={this.state.evenClickCount} />
    </div>
    );
  }
}


export default MyCounter;

