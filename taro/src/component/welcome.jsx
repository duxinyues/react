import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

export default class Welcome extends Component {
    render() {
        return <View style={{ textAlign: "center" }}>Hello，{this.props.name}</View>
    }

}
