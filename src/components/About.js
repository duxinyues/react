import React, { Component } from 'react'
import {Card} from 'antd'
import headImg from '../assets/images/4.jpg';
export default class AboutMe extends Component {
    render() {
        return (
            <Card className="about_me">
            <h2>关于我</h2>
            <ul>
                <div className="head_img"><img src={headImg} alt="" /></div>
                <p><b>读心</b>  ，读心，读书，读自己！</p>
            </ul>
        </Card>
        )
    }
}
