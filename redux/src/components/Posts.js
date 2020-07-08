import React, { Component } from "react";
//给之前的状态规定一个数据类型，
import propTypes from 'prop-types';

//在posts中使用fetchpost方法，需要用reducer中提供的connect来连接

import { connect } from 'react-redux';
import { fetchPost } from "../actions/postAction"
class Posts extends Component {
    //数据从redux中拿取，则不需要使用constructor了
    componentDidMount() {
        this.props.fetchPost()
    }
    render() {
        const postItem = this.props.posts.map((item) => (
            <div key={item.id}>
                <h3>name:{item.name}</h3>
                <p>email:{item.email}</p>
            </div>
        ))
        return <div>{postItem}</div>
    }
}

/**
 * 把返回的状态转化为我们的属性props
 */
const mapStateToProps = state=>({
    /**
     * state中的posts，是在reducers中index.js定义的posts
     * item中posts的属性在postReducer.js定义的初始值
     */
    posts:state.posts.item
});

//规范方法和状态的使用类型
Posts.propTypes={
    fetchPost:propTypes.func.isRequired,
    posts:propTypes.array.isRequired
}

/**
 * connet接受两个参数（方法）
 * connet(mapStateToProps,{fetchPost})
 */
export default connect(mapStateToProps,{fetchPost})(Posts)