import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../action';

import Picker from '../component/Picker';
import Posts from '../component/Posts';

class AsyncApp extends Component{
    componentDidMount(){
        const {dispatch,selectSubreddit} = this.props;
        dispatch(fetchPostsIfNeeded(selectSubreddit))
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.selectSubreddit !== this.props.selectSubreddit) {
            const {dispatch,selectSubreddit} = nextProps;
            dispatch(fetchPostsIfNeeded(selectSubreddit))
        }
    }
    handleChange=(nextSubreddit)=>{
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }
    handleRefreshClick = (e) => {
        e.preventDefault();
        const {dispatch,selectSubreddit} = this.props;
        dispatch(invalidateSubreddit(selectSubreddit))
        dispatch(fetchPostsIfNeeded(selectSubreddit))
    }
    render(){
        const {selectSubreddit,posts,isFetching,lastUpdated} = this.props;
        return(
            <div>
                <Picker
                    value={selectSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs','frontend']}
                />
                <p>
                    {lastUpdated && (
                        <span>
                            last update at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                        </span>
                    )}
                    {
                        !isFetching && (
                            <a href="#" onClick={this.handleRefreshClick}>
                                Refresh
                            </a>
                        )
                    }
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty...</h2>}
                {posts.length > 0 && (<div style={{opacity:isFetching ? 0.5:1}}>
                    <Posts posts={posts} />
                </div>)}
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    const {selectedSubreddit,postsBySubreddit} = state
    const {isFetching,lastUpdated,items:posts} = postsBySubreddit[
        selectedSubreddit
    ] ||{
        isFetching:true,
        items:[]
    }
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)
