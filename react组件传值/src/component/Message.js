import React from "react";
import Button from "./button";
//子组件
class Message extends React.Component {
    render() {
        return (
            <div>
                <Button>Delete</Button>
            </div>
        );
    }
}

export default Message