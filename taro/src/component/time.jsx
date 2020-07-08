import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components"

export default class Time extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timeID = setInterval(() => {
            this.updateTime()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeID)
    }
    updateTime() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return <View style={{ textAlign: "center" }}>{this.state.date.toLocaleTimeString()}</View>
    }
}