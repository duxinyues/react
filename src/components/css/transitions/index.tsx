/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-07 22:57:54
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-07 23:25:47
 * @FilePath: \react\src\components\css\transitions\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */

import React from "react"
import "./index.scss"
// export default function Transitions() {
//   document.title = 'css动画'
//   return <div className="transition">
//     <h1>过度</h1>
//     <button>过度</button>

//     <div className="sroll" ref={(el:any) => {
//       console.log(el.scrollHeight)
//       console.log(el.clientHeight)
//     }}>滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条</div>
//   </div>
// }

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
        console.log(el)
        console.log(el.scrollHeight)
        console.log(el.clientHeight)
      }}>滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条滚动条</div>
    </div>
  }
}