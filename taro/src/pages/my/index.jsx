import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() { }
    config = {
        navigationBarTitleText: '个人中心'
    }

    render() {
        return (
            <View className='index'>
                <Text>个人中心</Text>
            </View>
        )
    }
}
