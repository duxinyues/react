/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-19 16:54:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-19 16:59:02
 * @FilePath: \react\test.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
let obj = { data: 0 };
const sss = Object.assign({}, { data: obj.data + 2 }, { data: obj.data + 2 }, { data: obj.data + 2 })


console.log(sss); // { data: 2 }