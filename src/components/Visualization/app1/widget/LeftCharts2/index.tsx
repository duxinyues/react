/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-03 23:02:42
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-03 23:53:09
 * @FilePath: \react\src\components\Visualization\app1\widget\LeftCharts2\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createArray } from "../../../../../config/utils"
const defaultStyle = { height: '200px', width: '350px', marginTop:'10px' };
export default function LeftCharts2() {
    const data = useRef(createArray(10, 500, 8))
    useEffect(() => {
        const myChart = echarts.init(document.getElementById('main') as HTMLElement);
        const updataData = () => {
            data.current = createArray(10, 500, 8)
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
                    show: false,
                    type: 'value',
                    axisLine: { show: false },
                    axisLabel: {
                        formatter: () => ("")
                    },
                    splitTitle: { show: false },
                    axisTick: { show: false },
                },
                series: {
                    data: data.current,
                    name: '产量',
                    type: 'line',
                    itemStyle: {
                        color: 'red'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: "green" }]
                        }
                    },
                    smooth: true,
                    showSymbols: true,
                    lineStyle: { width: 0 }
                },
            });
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return <div id="main" style={defaultStyle}></div>
}