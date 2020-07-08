import React,{Component} from 'react';
class Posts extends Component{
    render(){
        return(
            <ul>
                {this.props.Posts.map((post,i)=>(
                    <li key={i}>{post.title}</li>
                ))}
            </ul>
        )
    }
}

export default Posts