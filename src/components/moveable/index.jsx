/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-09 22:41:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-10 22:59:55
 * @FilePath: \react\src\components\moveable\index.jsx
 * @Description: react-moveable的应用
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useState, useEffect } from "react"
import Moveable from "react-moveable";
import "./index.scss"
export default function MoveItem() {
  const [target, setTarget] = useState(null)
  const [frame, setFrame] = useState({
    translate: [0, 0],
  });
  useEffect(() => {
    setTarget(document.querySelector('.target'))
  }, [])
  // 拖拽
  function handleDragStart(e) {
    e.set(frame.translate);
  }
  function handleDrag(e) {
    frame.translate = e.beforeTranslate;
    e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
  }
  return (
    <div className='container'>
      <div className='target'>

      </div>
      <Moveable
        target={target} // moveable的对象
        resizable={false}
        onResize={({
          target, width, height,
          dist, delta, direction,
          clientX, clientY,
        }) => {
          console.log("onResize", target);
          delta[0] && (target.style.width = `${width}px`);
          delta[1] && (target.style.height = `${height}px`);
        }}
        draggable={false} // 是否可以拖拽
        //   padding={{"left":0,"top":0,"right":0,"bottom":0}} // padding距离
        zoom={1} // 缩放包裹的moveable
        origin={true} // 显示中心点
        throttleDrag={0} // 拖拽阈值 达到这个值才执行拖拽
        onDragStart={handleDragStart} // 拖动开始执行
        onDrag={handleDrag} // 拖动中
        scalable={true}
        onScale={({
          target, scale, dist, delta, transform,
          clientX, clientY,
        }) => {
          console.log("onScale scale", scale);
          target.style.transform = transform;
        }}
      />
    </div>
  )
}