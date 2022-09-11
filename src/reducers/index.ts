/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-09-11 21:10:20
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-11 21:11:57
 * @FilePath: \react\src\reducers\index.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { combineReducers } from "redux";
import menuReducer from "./menu";
const reducers = combineReducers({
    menus: menuReducer,
});

export default reducers