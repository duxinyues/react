import React, { Component } from 'react'
import Children from './Children'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "父组件内容",
            text: ""
        }
    }
    hanldeChange(text) {
        this.setState({
            data: text
        })
    }
    render() {
        return (
            <div>
                <p>这是子组件传过来的内容：{this.state.text}</p>
                <Children parent={this.state.data} hanldeChange={this.hanldeChange.bind(this)} />
            </div>
        )
    }
}