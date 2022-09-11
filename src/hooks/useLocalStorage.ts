/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-11 12:59:40
 * @FilePath: \react\src\hooks\useLocalStorage.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useState, } from 'react';

export default function useLocalStorage(key: string) {
  const [localStorage] = useState(window.localStorage.getItem(key))

  const setLocalStorage = (params: any) => {
    window.localStorage.setItem(key, JSON.stringify(params))
  }
  return {localStorage, setLocalStorage}
}