import React, { Component } from 'react';
import { Row } from 'antd';
import axios from 'axios';

class TodayPoetry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount = () => {

        
    }
    getArtList = () => {
        const that = this;
        axios.create({
            baseURL: "https://v2.jinrishici.com/one.json",
            withCredentials: true
        }).get('').then(function (result) {
            console.log(result);
        })

        
    };

    componentWillMount() {
        this.getArtList();
    }
    render() {
        // const aaa = this.state.data.data
        return (
            <Row>
                {/* <h2>ssss</h2> */}
            </Row>
        )
    }
}

export default TodayPoetry