import React,{Component} from 'react';
import {Row,Card,Icon,Tag,Col,Pagination} from 'antd'
import AboutMe from './../../components/About';
import TodayPoetry from './../../components/TodayPoetry';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {CONFIG}  from '../../config';
import FLink from '../../components/Link'
import  QueueAnim  from 'rc-queue-anim';
import TimeUpdate from '../../utils';
import Banner from "../../components/Banner";
const {Meta} = Card;
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            labelList:[],
            nowPageIssues: [],
            // 当前选中的页码
            page: 1,
            // 一页的数量
            pageNum: 6,
        }
    }
    componentDidMount(){
        const { issues } = this.props;
        const { page, pageNum } = this.state;
        document.title = "读心，读自己 | 见证一个程序员的成长";
        this.setState({ nowPageIssues: issues.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1)) })
        this.getBlogLabels()
    }
    componentWillReceiveProps(newProps) {
        if (this.props.issues !== newProps.issues) {
            const { page, pageNum } = this.state;
            this.setState({ nowPageIssues: newProps.issues.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1)) })
        }
    }
    //获取标签
    getBlogLabels = ()=>{
        axios.get(`https://api.github.com/repos/${CONFIG['owner']}/blogtext/issues`, {
            params: {
                creator: 'weiyongyuan94',
                client_id: 'a5636a8f618a5ce0c877',
                client_secret: '054b02cccd28b32a030b4ac7778384fc3fe7e812',
            },
        }).then((response) => {
            if (response.status === 200) {
                // 进行时间格式统一处理
                const data = response.data;
                this.noRepeat(data)
            } else {

            }
        });
    }
    pageChange = (page, pageSize) => {
        const { pageNum } = this.state;
        const { issues } = this.props;
        this.setState({ page, nowPageIssues: issues.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1)) })
    }
    //标签去重
    noRepeat=(data)=>{
        if( data.length===0) return [];
        const arr = [];
        data.map((item)=>{
            if (item.labels && item.labels.length){
                item.labels.map((vitem)=>{
                    arr.push(vitem);
                    return ''
                })
            }
            return ''
        })
        let obj = {};
        const person = arr.reduce((cur,next) => {
            if(!obj[next.id]){
                cur.push(next);
                obj[next.id] = true
            }
            return cur;
        },[])
        this.setState({
            labelList: person
           
        })
    }
    render(){
        const {issues} = this.props;
        const { labelList, nowPageIssues, page, pageNum} = this.state;
        return(
            <Row>
                <Row className="l_box">
                    <QueueAnim
                        animConfig={[
                            {opacity:[1,0],translateY:[0,150]},
                            {opacity:[1,0],translateY:[0,-150]}
                        ]}
                    >
                    <AboutMe/>
                    <Card className="cloud">
                        <h2>文章分类</h2>
                        <ul>
                            {
                                labelList.map((value, key) => {
                                    return (
                                        <Link key={key} to={`/cloud/${value.name}`}
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
                                issues.map((item,key)=>{
                                    if (key<9){
                                        return(
                                            <li key={key}><Link to={`/blog/${item.number}`}>{item.title}</Link></li>
                                        )
                                    }
                                    return ''
                                })
                            }
                        </ul>
                    </Card>
                    <FLink />
                    <TodayPoetry />
                    </QueueAnim>
                </Row>
                <Row className="r_box">
                        <Banner/>
                        <QueueAnim
                            animConfig={[
                                {opacity:[1,0],translateY:[0,150]},
                                {opacity:[1,0],translateY:[0,-150]}
                            ]}
                        >
                        {
                            nowPageIssues && nowPageIssues.length?(
                                nowPageIssues.map((item,index)=>{
                                        const time = TimeUpdate(item.created_at);
                                        return (
                                            <Card key={index} style={{ width: '100%', marginBottom: 20, display: 'block', background: 'rgba(255, 255, 255, 0.8)'}}>
                                                <Meta
                                                    title={<h3><Link to={`/blog/${item.number}`}>{item.title}</Link></h3>}
                                                    description={
                                                        <Row>
                                                            <Row className="listInfo">
                                                                <Col className="createTime"><Icon className="calendar" type="clock-circle" theme="twoTone" style={{marginRight:5,marginTop:-2}}/>{time}</Col>
                                                                <Col className="tag" style={{marginLeft:15}}>
                                                                    <Icon type="tags-o" style={{fontSize:20,marginRight:5,marginTop:-3}} />
                                                                    {
                                                                        item.labels && item.labels.length?(
                                                                            item.labels.map((value,key)=>{
                                                                                return (
                                                                                    <Tag className="blogTag" to={`/cloud/${value.name}`} key={key} style={{ color:`#096`}} >
                                                                                        {value.name}
                                                                                    </Tag>
                                                                                )
                                                                            })
                                                                        ):null
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
                                ):null
                        }
                        <Pagination
                            defaultCurrent={1}
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
const mapStateToProps = state=>{
    return {
        issues:state.issues
    }
}
export default connect(mapStateToProps)(Home);