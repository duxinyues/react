import React, { Component } from 'react';
import {Card} from 'antd';
class FLink extends Component {
    render() {
        return (
            <Card className="tuijian">
                <h2>友情链接</h2>
                <ul>
                    <li><a href="https://github.com/weiyongyuan94" target="_blank" rel="opener">Github</a></li>
                    <li><a href="https://blog.csdn.net/xuelian3015" target="_blank" rel="opener">CSDN</a></li>
                    <li><a href="https://www.yuque.com/duxin-gyxgn" target="_blank" rel="opener">语雀</a></li>
                    <li><a href="https://www.jianshu.com/u/0cd38e1615f3" target="_blank" rel="opener">简书</a></li>
                    <li><a href="http://www.zsxcool.com/" target="_blank" rel='noreferrer noopener'>张思翔个人博客</a></li>
                </ul>
            </Card>
        )
    }
}

export  default FLink