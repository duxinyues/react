import React, { Component } from 'react'
import {Card} from 'antd';
export default class FLink extends Component {
    render() {
        return (
            <Card className="tuijian">
                            <h2>友情链接</h2>
                            <ul>
                    <li><a href="http://weiyongyuan94.lofter.com" rel="opener">我的乐乎主页</a></li>
                    <li><a href="https://github.com/weiyongyuan94" rel="opener">Github</a></li>
                    <li><a href="https://blog.csdn.net/xuelian3015" rel="opener">CSDN</a></li>
                            </ul>
                        </Card>
        )
    }
}
