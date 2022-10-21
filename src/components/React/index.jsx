/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-09-13 10:56:10
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-19 18:29:29
 * @FilePath: \react\src\components\React\index.jsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */

import React from "react";
import { connect } from "react-redux";
class Comm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('componentDidMount', this.props)
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    changeText = () => {
        this.setState((state) => {
            return {
                data: state.data + 2
            }
        })
        this.setState((state) => {
            return {
                data: state.data + 2
            }
        })
        this.setState((state) => {
            return {
                data: state.data + 2
            }
        })
        this.props.changeMenu()
        console.log("this.props", this.props)
    }
    state = {
        data: 9
    }
    render() {
        return <React.Fragment>
            <p>父组件：{this.state.data}</p>
            <Children data={this.state.data} changeText={this.changeText} />
            <button onClick={this.changeText} >按钮</button>
        </React.Fragment>
    }
}

function Children({ data, changeText }) {
    return <div>
        <div>这是子组件的:{data}
            <button onClick={() => changeText()}>修改</button>
        </div>
    </div>
}
const mapStateToProps = (state) => {
    return { menus: state.menus }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMenu: () => dispatch({ type: 'UPDATE_CONFIG', value: [] })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comm);