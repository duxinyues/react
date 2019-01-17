import React, { Component } from 'react';
import { Row, Card, Icon, Tag, Col, Pagination } from 'antd';
import AboutMe from './../../components/About';
import WeChat from './../../components/Calendar';
import FLink from './../../components/Link';
import { Link,} from 'react-router-dom';
import axios from 'axios';
import TodayPoetry from './../../components/TodayPoetry';
import { CONFIG } from '../../config';
import QueueAnim from 'rc-queue-anim';
import TimeUpdate from '../../utils';
const { Meta } = Card;
class Essays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues:[],
            labelList: [],
            nowPageIssues: [],
            // 当前选中的页码
            page: 1,
            // 一页的数量
            pageNum: 7,
        }
    }
    componentDidMount() {
        const { page, pageNum,issues } = this.state;
        this.setState({ nowPageIssues: issues.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1)) })
        this.getBlogLabels()
    }
    //获取标签
    getBlogLabels = () => {
        axios.get(`https://api.github.com/repos/${CONFIG['owner']}/weiyongyuan94.github.io/issues`, {
            params: {
                creator: 'weiyongyuan94',
                client_id: 'a5636a8f618a5ce0c877',
                client_secret: '054b02cccd28b32a030b4ac7778384fc3fe7e812',
            },
        }).then((response) => {
            if (response.status === 200) {
                // 进行时间格式统一处理
                const data = response.data;
                this.setState({issues:data})
                this.noRepeat(data)
            } else {

            }
        });
    }
    //标签去重
    noRepeat = (data) => {
        if (data.length === 0) return [];
        const arr = [];
        data.map((item) => {
            if (item.labels && item.labels.length) {
                item.labels.map((vitem) => {
                    arr.push(vitem);
                    return ''
                })
            }
            return ''
        })

        let obj = {};
        const person = arr.reduce((cur, next) => {
            if (!obj[next.id]) {
                cur.push(next);
                obj[next.id] = true
            }
            return cur;
        }, [])
        this.setState({
            labelList: person

        })
    }
    render() {
        const { labelList, page, pageNum,issues } = this.state;
        return (
            <Row>
                <Row className="l_box">
                    <QueueAnim
                        animConfig={[
                            { opacity: [1, 0], translateY: [0, 150] },
                            { opacity: [1, 0], translateY: [0, -150] }
                        ]}
                    >
                        <AboutMe/>
                        <Card className="cloud">
                            <h2>标签云</h2>
                            <ul>
                                {
                                    labelList.map((value, key) => {
                                        return (
                                            <Link key={key} to={`/ecloud/${value.name}`}
                                                style={{ backgroundColor: `#${value.color}` }}>{value.name}</Link>
                                        )
                                    })
                                }
                            </ul>
                        </Card>
                        <Card className="tuijian">
                            <h2>最近文章</h2>
                            <ul>
                                {
                                    issues.map((item, key) => {
                                        if (key < 9) {
                                            return (
                                                <li key={key}><Link to={`/essayCon/${item.number}`}>{item.title}</Link></li>
                                            )
                                        }
                                        return ''
                                    })
                                }
                            </ul>
                        </Card>
                        <WeChat/>
                        <TodayPoetry />
                    </QueueAnim>
                </Row>
                <Row className="r_box">
                    <QueueAnim
                        animConfig={[
                            { opacity: [1, 0], translateY: [0, 150] },
                            { opacity: [1, 0], translateY: [0, -150] }
                        ]}
                    >
                        {
                            issues && issues.length ? (
                                issues.map((item, index) => {
                                    const time = TimeUpdate(item.created_at);
                                    return (
                                        <Card key={index} style={{ width: '100%', marginBottom: 20, display: 'block' }}>
                                            <Meta
                                                title={<h3><Link to={`/essayCon/${item.number}`}>{item.title}</Link></h3>}
                                                description={
                                                    <Row>
                                                        <Row className="listInfo">
                                                            <Col className="createTime"><i className="calendar" type="" style={{ marginRight: 5 }} />{time}</Col>
                                                            <Col className="tag" style={{ marginLeft: 15 }}>
                                                                <Icon type="tags-o" style={{ fontSize: 20, marginRight: 5 }} />
                                                                {
                                                                    item.labels && item.labels.length ? (
                                                                        item.labels.map((value, key) => {
                                                                            return (
                                                                                <Tag className="blogTag" key={key} style={{ color: `#${value.color}` }} >
                                                                                    {value.name}
                                                                                </Tag>
                                                                            )
                                                                        })
                                                                    ) : null
                                                                }
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <p className='index-blog-content'>{item.body}</p>
                                                            </Col>
                                                        </Row>
                                                    </Row>
                                                }
                                            />
                                        </Card>
                                    )
                                })
                            ) : null
                        }
                        <Pagination
                            current={page}
                            total={issues.length}
                            pageSize={pageNum}
                            onChange={(page, pageSize) => this.pageChange(page, pageSize)}
                            hideOnSinglePage={true}
                            style={{ display: 'flex', justifyContent: 'center', marginBottom: 15 }}
                        />
                    </QueueAnim>
                </Row>
            </Row>
        )
    }
}

export default Essays;