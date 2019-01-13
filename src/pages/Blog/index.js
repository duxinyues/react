import React, {Component} from 'react';
import axios from 'axios';
import {Card, message, Row} from 'antd';
import TimeUpate from './../../utils/';
import marked from 'marked';
import {CONFIG} from '../../config';
import GitTalk from '../GitTalk'
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            path:'',
            talk:true
        }
    }
    getBlogContent = (path) => {
        this.setState({connect:[]});
        const self = this;
        const api = `https://api.github.com/repos/${CONFIG['owner']}/blogtext/issues/` + path;
        axios.get(api, {
            creator: 'weiyongyuan94',
            client_id: '53b1502bf95091987671',
            client_secret: '47f3f2006d5c743b97543a3bc8170507392b3b4b'
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data;
                self.setState({
                    content: [data],
                })
            }
        }).catch(function (error) {
            message.warning("文章不存在!");
        });
    };
    componentWillMount() {
        this.getBlogContent(this.props.match.params.number);
        this.setState({
            path: this.props.match.params.number
        })
    }
    componentWillReceiveProps(nextProps){
        if (this.props.match.params.number !== nextProps.match.params.number) {
            this.setState({ path: nextProps.match.params.number, talk: false })
        }
    }
    render() {
        const {content,path,talk} = this.state;
        console.log(path)
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
                        {talk  ? <GitTalk path={this.state.path} /> : null}
                    </article>
                </Card>
            </Row>
        )
    }
}

export default Blog