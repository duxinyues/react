import { FETCH_POST } from "./types";

export const fetchPost = () => dispatch => {
    fetch("http://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            //内容分发
            dispatch({
                type: FETCH_POST,
                //把请求的数据返回去
                payload: data
            })
        })
}