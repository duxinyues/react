/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-11 23:20:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-11 23:25:04
 * @Description: store文件
 */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducer";

const reducers = combineReducers({
    ...allReducers
})


const initialState = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middleware)
))


export default store
