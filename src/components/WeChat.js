import React, { Component } from 'react'
import {Card} from  'antd'
import wxImg from '../assets/images/wx.png';
export default class WeChat extends Component {
    render() {
        return (
            <Card className="guanzhu">
                        <h2>关注我 么么哒</h2>
                        <ul>
                            <img src={wxImg} alt=""/>
                        </ul>
                    </Card>
        )
    }
}
