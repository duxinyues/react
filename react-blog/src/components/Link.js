import React, { Component } from 'react';
import {Card} from 'antd';
class FLink extends Component {
    render() {
        return (
            <Card className="tuijian">
                <h2>友情链接</h2>
                <ul>
                    <li><a href="https://github.com/qingzhuxin" target="_blank" rel="opener">Github</a></li>
                    <li><a href="https://blog.csdn.net/xuelian3015" target="_blank" rel="opener">CSDN</a></li>
                    <li><a href="https://www.yuque.com/wyyuan/web" target="_blank" rel="opener">语雀</a></li>
                </ul>
            </Card>
        )
    }
}

export  default FLink