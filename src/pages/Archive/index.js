import React from 'react';
import {Card, Timeline,Icon} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css'
import './index.less';
const {Meta} = Card;
class Archive extends React.Component {
    componentDidMount() {
        document.title = "归档"
    }
    render() {
        const {issues} = this.props;
        return (
            <Card bordered={false} hoverable={true} className="card">
                <Meta
                    description={
                        <Timeline style={{marginTop: 20}}>
                            {
                                issues && issues.length ? (
                                    issues.map((item, index) => {
                                        return (<Timeline.Item key={index} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                                        {
                                                item.labels.map((tvalue, tkey) => {
                                                    return(
                                                        <Link to={`/blog/${item.number}`} key={tkey} id="archive" style={{ color: `#${tvalue.color}`,fontWeight:'bold' }}>
                                                            <span >{item.title}</span>
                                                            <span >{item.created_at}</span>
                                                        </Link>
                                                    )
                                                })
                                        }
                                        </Timeline.Item>)
                                    })
                                ) : null
                            }
                        </Timeline>
                    }
                />
            </Card>
        );
    }
}
const mapStateToProps = state => {
    return {
        issues: state.issues
    }
}
export default connect(mapStateToProps)(Archive);