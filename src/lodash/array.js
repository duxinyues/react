/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-06 22:01:41
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-06 22:28:04
 * @FilePath: \react\src\lodash\array.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const chunk = require("lodash/chunk");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 54];
console.log(chunk(arr, 4));

const compact = require("lodash/compact");
const newArr = compact([0, 1, false, 2, '', 3]);
console.log(newArr); // [ 1, 2, 3 ]
console.log([0, 1, false, 2, '', 3].filter(item => item));// [ 1, 2, 3 ]

const difference = require("lodash/difference");
const diffArr =[1,2,3,5,4];
console.log(difference(diffArr,[1,2,4])); // [3,5]

const drop =require("lodash/drop");
console.log(drop([1,2,3,5,4,3],2));// [3,5,4,3]