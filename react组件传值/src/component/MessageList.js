import React from "react";
import PropTypes from "prop-types";
import Message from "./Message"
//父组件
class MessageList extends React.Component {
    // 定义Context需要实现的方法
    getChildContext() {
        return {
            color: "red",
            text: "跨组件传值"
        };
    }

    render() {
        return <Message />;
    }
}

// 声明Context类型
MessageList.childContextTypes = {
    color: PropTypes.string,
    text: PropTypes.string
};

export default MessageList