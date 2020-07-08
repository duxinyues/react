import React from 'react';
import { Row, Card, Icon , Col, Tag , List } from 'antd';
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CONFIG } from '../../config';
import TimeUpdate from '../../utils';
const { Meta } = Card;

export default class TagBlog extends React.Component {

    state = {
        list:[],
        name:'',
        loading:false
    }

    componentWillMount() {
        document.title = this.props.match.params.name
        this.setState({name:this.props.match.params.name})
        this.getBlogApiData(this.props.match.params.name)
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.name !== newProps.match.params.name){
            this.setState({ name: newProps.match.params.name,list:[]})
            this.getBlogApiData(newProps.match.params.name)
        }
    }
    // 获取该标签的博客列表
    getBlogApiData(data) {
        this.setState({ loading:true})
        axios.get(`https://api.github.com/repos/${CONFIG['owner']}/blogtext/issues`, {
            params: {
                labels: data,
                creator: 'qingzhuxin',
                client_id: 'a5636a8f618a5ce0c877',
                client_secret: '054b02cccd28b32a030b4ac7778384fc3fe7e812',
            },
        }).then((response) => {
            if (response.status === 200) {
                // 进行时间格式统一处理
                const data = response.data;
                const list = this.updateTime(data);
                console.log(list);
                this.setState({ list:list , loading:false})
            } else {

            }
        });
    }

    // 时间处理函数，留下年月日
    updateTime(data) {
        if (data.length === 0) return;
        data.map((item) => {
            item.created_at = TimeUpdate(item.created_at);
            return ''
        })
        return data;
    }

    render() {
        const { list, name, loading } = this.state;
        return (
            <Card
                style={{ width: '100%', marginBottom: 20 }}
                loading={loading}
            >
                <Meta
                    title={<h3 style={{paddingTop:20,paddingLeft:25}}>{`分类:${name}`}</h3>}
                    description={
                        <List
                            itemLayout="horizontal"
                            dataSource={list}
                            renderItem={item=>(
                                <List.Item>
                                    <List.Item.Meta
                                        style={{width:'100%'}}
                                        title={<Link to={`/blog/${item.number}`}style={{fontSize:18,marginLeft:-25}}>{item.title}</Link>}
                                        description={
                                            <Row>
                                                <Row style={{display:'flex'}}>
                                                    <Col style={{}}>
                                                        <Icon className="calendar" style={{marginRight:5}}/>
                                                        {item.created_at}
                                                    </Col>
                                                    <Col style={{marginLeft:15,display:'flex'}}>
                                                        <Icon type="tags-o" style={{marginRight:10,paddingTop:3}}/>
                                                        {
                                                           item.labels && item.labels.length ? (
                                                               item.labels.map((value,index)=>{
                                                                   return (
                                                                       <Tag key={index} style={{backgroundColor:`#${value.color}`,padding:'0px 5px',borderRadius:5,color:'#fff'}}>
                                                                       {value.name}
                                                                       </Tag>
                                                                   )
                                                               })
                                                           ) : null
                                                        }
                                                    </Col>
                                                </Row>
                                                <Row style={{marginTop:25}}>
                                                    <Col>
                                                        <p className='index-blog-content' style={{paddingLeft:25}}>{item.body}</p>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    }
                />
            </Card>
        );
    }
}