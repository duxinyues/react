/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-03 22:56:48
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 23:20:27
 * @FilePath: \react\src\components\Visualization\app1\widget\LeftChart1\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import "./index.scss"
const { CapsuleChart } = require("@jiaminghi/data-view-react");
export default function LeftChart1() {
    const config = {
        data: [
            {
                name: '一品',
                value: 78,
            },
            {
                name: '四品',
                value: 54,
            },
            {
                name: '三品',
                value: 123,
            },
            {
                name: '二品',
                value: 167,
            },
            {
                name: '其他',
                value: 77,
            },
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '人',
    }
    return <div className="left-chart-3">
        <div className="lc3-details">
            目标人数<span>245</span>
        </div>
        <CapsuleChart className="lc3-chart" config={config} />
    </div>
}