/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-09 22:41:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-11 22:48:05
 * @FilePath: \react\src\components\moveable\index.jsx
 * @Description: react-moveable的应用
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useState, useEffect } from "react"
import Moveable from "react-moveable";
import "./index.scss"
export default function Drag() {
  const [target, setTarget] = useState(null)
  useEffect(() => {
    setTarget(document.querySelector('.target')); //初始化move对象
  }, [])
  // 拖拽
  function handleDrag(e) {
    e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
  }
  return (
    <div className='container'>
      <div className='target'>move</div>
      <Moveable
        target={target} // moveable的对象
        draggable={true} // 是否可以拖拽
        onDrag={handleDrag} // 拖动中
      />
    </div>
  )
}