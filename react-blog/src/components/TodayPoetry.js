import React, { Component } from 'react';
import { Row } from 'antd';
import axios from 'axios';

class TodayPoetry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            origin:{},
            matchTags:[],
            popularity:null
        }
    }
    componentDidMount = () => {
        this.getArtList();
    }
    getArtList = () => {
        const that = this;
        axios.create({
            baseURL: "https://v2.jinrishici.com/one.json",
            withCredentials: true
        }).get('').then(function (result) {
            that.setState({
                content: result.data.data.content,
                origin:result.data.data.origin,
                matchTags: result.data.data.matchTags,
                popularity: result.data.data.popularity
            })
        })
    };
    
    render() {
        const { content, origin, matchTags, popularity} = this.state
        var arr = []
        for (let i in origin.content) {
            arr.push(origin.content[i]);
        }
        function joinArray(array){
            return array.join(",  ")
        }
        return (
            <Row className="todayPoetry">
                <h2>今日推荐诗（词）</h2>
                <ul>
                    <li className="poetry-title">{origin.title}</li>
                    <li className="poetry-author">{origin.author}.{origin.dynasty}</li>
                    {
                        arr.map((value,key)=>{
                            return (
                                <li className="poetry-content" key={key}>{value}</li>
                            )
                        })
                    }
                    <li className="tj">推荐诗（词）句:</li>
                    <li className="tj-poetry">{content}</li>
                    <li className="tj">推荐关键词:  {joinArray(matchTags)}</li>
                    <li className="tj">流行度评价:  {popularity}</li>
                </ul>
            </Row>
        )
    }
}
export default TodayPoetry