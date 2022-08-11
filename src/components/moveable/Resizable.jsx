/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-11 22:45:21
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-11 23:12:07
 * @FilePath: \react\src\components\moveable\Resizable.jsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect, useState } from "react";
import Moveable from "react-moveable";
import "./index.scss"
export default function Resizable() {
    const [target, setTarget] = useState(null)
    useEffect(() => {
        setTarget(document.querySelector('.target')); //初始化move对象
    },[])
    return <div className='container'>
        <div className='target'>move</div>
        <Moveable
            target={target} // moveable的对象
            container={document.querySelector('.container')} 
            resizable={true}
            onResize={({ target, width, height, dist, delta, clientX, clientY }) => {
                delta[0] && (target.style.width = `${width}px`);
                delta[1] && (target.style.height = `${height}px`);
            }}
            onRenderStart={()=>{
                console.log("start")
            }}
            onRenderEnd={()=>{
                console.log("end")
            }}
        />
    </div>
}