/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-04 22:41:52
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 23:22:18
 * @FilePath: \react\src\components\Visualization\app1\widget\CenterCmp\CenterCmp.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useState, useEffect } from "react";
import PieRoseType from './pie-roseType'
import './index.scss';
const { Decoration1 } = require('@jiaminghi/data-view-react');
const style = { width: '200px', height: '50px' };
const getData = (data: number) => {
    return Math.floor(Math.random() * data)
}
export default function CenterCmp() {
    const [data1,setData1] = useState(getData(10));
    const [data2,setData2] = useState(getData(10));
    const [data3,setData3] = useState(getData(10));
    const [data4,setData4] = useState(getData(10));
    useEffect(()=>{
        const timer = setInterval(() => {
            setData1(getData(10));
            setData2(getData(10));
            setData3(getData(10));
            setData4(getData(10));
        }, 2000)
        return () => clearInterval(timer)
    },[])
    return <div className="center-cmp">
        <div className="cc-header">
            <Decoration1 style={style} />
            <div className="cc-details">
                <div>活跃人数</div>
                <div className="card">{data1}</div>
                <div className="card">{data2}</div>
                <div className="card">{data3}</div>
                <div className="card">{data4}</div>
            </div>
            <Decoration1 style={style} />
        </div>
        <div className="cc-main-container">
            <PieRoseType />
        </div>
    </div>
}