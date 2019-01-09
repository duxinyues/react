/**
 * 数据的处理
 * */

import type  from './type';
export default (state,action)=>{
    switch (action.type){
        case type.ISSUES_LIST:
            return {
                ...state,
                issues:action.params
            }
        default:
            return {...state};
    }
}





