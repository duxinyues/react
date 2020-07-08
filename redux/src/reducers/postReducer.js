//引入dispatch的type类型
import {FETCH_POST} from "../actions/types";

//reducer的作用就是返回一个新的状态
const initialState = {
    //存储自己想要的状态
    item:[]        //访问当前文件中的时候定义一个初始状态(数据)
}

/**
 * reducer是一个纯函数，接收旧的state和action，返回新的state
 * @param {*} state 
 * @param {*} action 
 */
export default function(state=initialState,action){
    switch(action.type){  
        case FETCH_POST:
            return {
                ...state,
                item:action.payload
            }
        default:
            return state
    }
}
