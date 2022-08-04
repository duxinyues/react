/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-04 23:04:55
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 23:26:19
 * @FilePath: \react\src\components\Visualization\app1\widget\RightChart2.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createArray } from "../../../../config/utils";
const defaultStyle = { width: '28vw', height: '25vh' };
export default function RightChart2() {
    const data = useRef(createArray(10, 100, 8))
    useEffect(() => {
        const myChart = echarts.init(document.getElementById('rightChart') as HTMLElement);
        const updataData = () => {
            data.current = createArray(10, 100, 8)
        }
        // 绘制图表
        const timer = setInterval(() => {
            updataData()
            myChart.setOption({
                tooltip: {
                    show: true,
                },
                grid: {
                    left: '0',
                    right: '0',
                    bottom: '0',
                    containLabel: true
                },
                xAxis: {
                    type: "category",
                    data: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                    axisLine: { show: false },
                    axisLabel: {
                        formatter: () => ("")
                    },
                    splitTitle: { show: false },
                    axisTick: { show: false },
                },
                yAxis: {
                    type: 'value',
                    axisLine: { show: false },
                    axisLabel: {
                        formatter: () => ("")
                    },
                    splitTitle: { show: false },
                    axisTick: { show: false },
                },
                series: [
                    {
                        data: data.current,
                        type: 'line',
                        smooth: true,
                        showSymbols: true,
                        lineStyle: { width: 5 }
                    }
                ],
            });
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return <div id="rightChart" style={defaultStyle}></div>
}