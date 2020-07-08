import React, { Component } from 'react';
export default class Children extends Component {
    render() {
        return (
            <div>
                这是父组件传值内容：{this.props.parent}
                <br />
                <input type="text" onChange={e => { this.props.hanldeChange(e.target.value) }} />
            </div>
        )
    }
}
