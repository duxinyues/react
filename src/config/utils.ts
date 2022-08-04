/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 22:41:26
 * @FilePath: \react\src\config\utils.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
export function createArray(start: any, end: any, length: number) {
  let arr = [];
  for (let index = 0; index < length; index++) {
    arr.push(Math.floor(Math.random() * (end - start) + start))
  }
  return arr;
}
export function createItems(start:number, end:number, length:number) {
  let arr = [];
  for (let index = 0; index < length; index++) {
      arr.push({ name: "item" + index, value: Math.floor(Math.random() * (end - start) + start) })
  }
  return arr;
}