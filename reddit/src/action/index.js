import fetch from 'cross-fetch'

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT ='INVALIDATE_SUBREDDIT';

export function selectSubreddit(subreddit) {
    return{
        type:SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return{
        type:INVALIDATE_SUBREDDIT,
        subreddit
    }
}

function requestPosts(subreddit) {
    return {
        type:REQUEST_POST,
        subreddit
    }
}

function receivePosts(subreddit,json) {
   return{
       type:RECEIVE_POST,
       subreddit,
       posts:json.data.children.map(child => child.date),
       receivedAt:Date.now()
   } 
}

function fetchPosts(subreddit) {
    return dispatch=>{
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
             .then(response => response.json())
             .then(json => dispatch(receivePosts(subreddit,json)))
    }
}

function shouldFetchPosts(state,subreddit) {
    const posts = state.postsBySubreddit[subreddit]
    if (!posts) {
        return true
    }else if (posts.isFetching) {
        return false
    }else{
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit){
    return (dispatch,getState)=>{
        if (shouldFetchPosts(getState(),subreddit)) {
            return dispatch(fetchPosts(subreddit))
        }
    }
}
