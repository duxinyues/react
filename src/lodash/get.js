/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-06 18:12:31
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-06 21:47:04
 * @FilePath: \react\src\lodash\get.js
 * @Description: 读取对象中某个属性值 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const get = require("lodash/get");
const obj = {
    name: "duxin",
    info: {
        num: 100,
        name: "小名",
        address: "2436576867"
    }
};


const targetObj = get(obj, "info.name");
console.log(targetObj); // 小名