import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Welcome from "../../component/welcome";
import Time from "../../component/time";
import './index.css';

export default class Index extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentWillMount() {
    const add = 90;
    console.log(add)
  }

  componentDidMount() {
    console.log(50)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: 'taro开发小程序'
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Welcome name="taro" />
        <Time />
      </View>
    )
  }
}
