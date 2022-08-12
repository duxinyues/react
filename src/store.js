/*
 * @Author: 韦永愿 1638877065@qq.com
 * @Date: 2022-08-12 08:49:42
 * @LastEditors: 韦永愿 1638877065@qq.com
 * @LastEditTime: 2022-08-12 09:12:38
 * @FilePath: \react\src\store.js
 * @Description: 
 * Copyright (c) 2022 by 韦永愿 email: 1638877065@qq.com, All Rights Reserved.
 */
import {legacy_createStore as createStore,combineReducers,applyMiddleware,compose}  from 'redux';
import thunk from 'redux-thunk';
import menus from './reducers/menu'

const reducers = combineReducers({
  menus: menus,
});

const  middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middleware)
))
export default store