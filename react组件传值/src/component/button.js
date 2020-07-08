import React, { Component } from "react";
import PropTypes from "prop-types";
//子（孙）组件
class Button extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        <button style={{ background: this.context.color }}>
          {this.props.children}
        </button>
        <p>{this.context.text}</p>
      </div>
    );
  }
}
//声明contextTypes用于访问MessageList中定义的数据
Button.contextTypes = {
  color: PropTypes.string,
  text:PropTypes.string
};

export default Button