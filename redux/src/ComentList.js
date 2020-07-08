import React, { Component } from "react";
import { createStore } from "redux";

class ComentList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            childtext: "这是子组件传递的信息"
        })
    }
    click(text) {
        this.props.pfn(text)
    }
    render() {
        console.log(this.props.arr)
        return (
            <div>
                <ul>
                    {
                        this.props.arr.map(item => {
                            return (
                                <li key={item.userName}>
                                    {item.userName} ===== {item.text}
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.click.bind(this, this.state.childtext)}> 按钮</button>
            </div>
        )
    }
}

function todos(state = [], action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

let store = createStore(todos, ['Use Redux',"duxin","xuelian"])

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
})

console.log(store.getState())
export default ComentList