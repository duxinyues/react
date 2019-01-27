import React, {Component} from 'react';
import axios from 'axios';
import {Card, message, Row} from 'antd';
import TimeUpate from './../../utils/';
import marked from 'marked';
import hljs from 'highlight.js';
import {CONFIG} from '../../config';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
        }
    }
    getBlogContent = (path) => {
        this.setState({connect:[]});
        const self = this;
        const api = `https://api.github.com/repos/${CONFIG['owner']}/blogtext/issues/` + path;
        axios.get(api, {
            creator: 'weiyongyuan94',
            client_id: 'a5636a8f618a5ce0c877',
            client_secret: '054b02cccd28b32a030b4ac7778384fc3fe7e812',
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data;
                document.title = data.title
                self.setState({
                    content: [data],
                })
            }
        }).catch(function (error) {
            message.warning("文章不存在!");
        });
    };
    componentWillMount() {
        
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });
        this.getBlogContent(this.props.match.params.number);

    }
    componentWillReceiveProps(nextProps){
        if (this.props.match.params.number !== nextProps.match.params.number) {
        }
    }
    render() {
        const { content} = this.state;
        return (
            <Row>
                <Card style={{width:'100%'}}>
                    <article>
                        <Card className="infosbox" >
                            {
                                content.map((item, key) => {
                                    return (
                                        <div className="newsview" key={key}>
                                            <h3 className="news_title">{item.title}</h3>
                                      
                                            <div className="bloginfo">
                                                <ul>
                                                    <li className="tags">标签:
                                                         {
                                                            item.labels.map((tvalue, tkey) => {
                                                                return (
                                                                    <a href="/" target="_blank" key={tkey}
                                                                        style={{ backgroundColor: `#${tvalue.color}` }}>{tvalue.name}</a>
                                                                )
                                                            })
                                                        }
                                                    </li>
                                                    <li className="timer">时间：{TimeUpate(item.created_at)}</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="news_con"
                                                 dangerouslySetInnerHTML={{__html: marked(item.body)}}/>
                                            
                                        </div>
                                        
                                    )
                                })
                            }
                        </Card>
                    </article>
                </Card>
            </Row>
        )
    }
}

export default Blog