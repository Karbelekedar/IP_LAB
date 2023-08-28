import React, { Component } from "react";

class ClassComponent extends Component {
  state = {
    style: {
      color: "black",
      fontSize: "16px",
    },
  };

  changeStyle = () => {
    this.setState({
      style: {
        color: "red",
        fontSize: "24px",
      },
    });
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p style={this.state.style}>Date: {this.props.date}</p>
        <p style={this.state.style}>Time: {this.props.time}</p>
        <button onClick={this.changeStyle}>Change Style</button>
      </div>
    );
  }
}

export default ClassComponent;
