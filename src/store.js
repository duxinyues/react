/*
 * @Author: 韦永愿 1638877065@qq.com
 * @Date: 2022-08-12 08:49:42
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-11 21:41:58
 * @FilePath: \react\src\store.js
 * @Description: 
 * Copyright (c) 2022 by 韦永愿 email: 1638877065@qq.com, All Rights Reserved.
 */
import {legacy_createStore,applyMiddleware,compose}  from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from './reducers';
const storageConfig = {
  key: "root",
  storage,
};
const  middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = persistReducer(storageConfig,reducers);
export let store = legacy_createStore(configStore,composeEnhancers(
  applyMiddleware(...middleware)
));
export let persistor = persistStore(store);