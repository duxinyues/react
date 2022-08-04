/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 23:04:15
 * @FilePath: \react\src\components\EchartComponents\ScatterChart.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import Echarts from "./HocEcharts"

const defaultStyle = { width: '28vw', height: '25vh' }
export default function ScatterChart() {
    const dataAll = [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
    ];
  
    const options = {
        title: {
            text: "",
            left: 'center',
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        tooltip: {
            formatter: 'Group {a}: ({c})'
        },
        xAxis: {},
        yAxis: {},
        series: {
            symbolSize: 20,
            data: dataAll,
            type: 'scatter'
        }
    };
    return <Echarts option={options} wrapStyle={defaultStyle} />
}