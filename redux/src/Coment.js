import React, { Component } from "react";
import ComentList from "./ComentList";



class Coment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [{
                "userName": "读心", "text": "123333", "result": true
            }, {
                "userName": "青竹", "text": "345555", "result": false
            }, {
                "userName": "雪莲", "text": "567777", "result": true
            }, {
                "userName": "悦读", "text": "789999", "result": true
            },],
            parentText: "这是父组件"
        }
    }
    accept(data) {
        this.setState({
            parentText: data
        }, () => {
            console.log(this.state.parentText)
        })
    }
    render() {
        return (
            <div>
                <ComentList arr={this.state.arr} pfn={this.accept.bind(this)} />
                <p>{this.state.parentText}</p>
            </div>
        )
    }
}


export default Coment