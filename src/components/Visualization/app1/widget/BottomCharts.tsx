/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-04 22:53:45
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 22:54:57
 * @FilePath: \react\src\components\Visualization\app1\widget\BottomCharts.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createArray } from "../../../../config/utils"
const defaultStyle = { height: '29.5vh', width: '75vw' };export default function BottomCharts() {
    const data = useRef(createArray(10, 500, 30))
    useEffect(() => {
        const myChart = echarts.init(document.getElementById('bottom') as HTMLElement);
        const updataData = () => {
            data.current = createArray(10, 10000, 30)
        }
        // 绘制图表
        const timer = setInterval(() => {
            updataData()
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '0',
                    right: '0',
                    bottom: '0',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: '', // 隐藏x轴的label标签
                    show: false, // 隐藏Y轴方向的刻度线
                },
                yAxis: {
                    type: 'value',
                    axisLabel: '',
                    show: false,
                },
                series: [
                    {
                        data: data.current,
                        type: 'bar',
                        itemStyle: {
                            color: '#003366'
                        },
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        },
                        barWidth: 25
                    }
                ]
            });
        }, 2000)
        return () => clearInterval(timer)
    }, [])
    return <div id="bottom" style={defaultStyle}></div>
}