import React, {Component} from 'react';
import {Row} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {CONFIG} from "../config";
class Cloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    getArtList = () => {
        let api = `https://api.github.com/repos/${CONFIG['owner']}/blog/issues`;
        axios.get(api,{
                params: {
                creator: 'weiyongyuan94',
                client_id: 'a5636a8f618a5ce0c877',
                client_secret: '054b02cccd28b32a030b4ac7778384fc3fe7e812',
                },
            }).then((response) => {
            const tag = response.data;
            const arr = [];
            arr.push(tag);
            console.log(arr.length)
            this.setState({
                data:response.data,
            })
        }).catch(function (error) {
            console.log(error);
        });
    };
    
    componentWillMount() {
        this.getArtList();
    }
    render() {
        const {data} = this.state;
        return (
            <Row style={{padding:"0"}}>
                <h2>文章分类</h2>
                <ul>
                    {
                        data.map((value, key) => {
                            return (
                                <Link key={key} to="/"
                                      style={{backgroundColor: `#${value.labels[0].color}`}}>{value.labels[0].name}</Link>
                            )
                        })
                    }
                </ul>
            </Row>
        )
    }
}

export default Cloud