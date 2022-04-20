import React from "react";

export default class SetState extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    console.log("increment setState前的count", this.state.count);
    this.setState({
      count: this.state.count + 1
    });

    console.log("increment setState后的count", this.state.count);
  }

  triple = () => {
    console.log("triple setState前的count", this.state.count);
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    console.log("triple setState后的count", this.state.count);
  }

  reduce = () => {
    setTimeout(() => {
      console.log("setTimeout setState前的count", this.state.count);
      this.setState({
        count: this.state.count - 1
      });
      console.log("setTimeout setState后的count", this.state.count);
    }, 0);
  }
  render() {
    return (<div>
      <h3>setState是异步还是同步的</h3>
      <button onClick={this.increment}>add</button>
      <button onClick={this.triple}>add1</button>
      <button onClick={this.reduce}>-</button>

      <p>{this.state.count}</p>
    </div>)
  }
}