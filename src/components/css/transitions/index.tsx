/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-07 22:57:54
 * @LastEditors: 韦永愿 1638877065@qq.com
 * @LastEditTime: 2022-08-12 11:03:54
 * @FilePath: \react\src\components\css\transitions\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */

import React from "react";
import "./index.scss"
export default class Transitions extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {}
  }
  render() {
    return <div className="transition">
      <h1>过度</h1>
      <button>过度</button>
      <div className="sroll" ref={(el: any) => {
        // console.log(el)
        // console.log(el.scrollHeight)
        // console.log(el.clientHeight)
      }}>滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条</div>
    </div>
  }
}