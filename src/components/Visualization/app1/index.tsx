/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-03 22:42:17
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 23:19:34
 * @FilePath: \react\src\components\Visualization\app1\index.tsx
 * @Description: 可视化
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useState, useEffect } from "react";
import LeftChart1 from "./widget/LeftChart1";
import LeftCharts2 from "./widget/LeftCharts2";
import Echarts from "../../EchartComponents/HocEcharts";
import ScatterChart from "../../EchartComponents/ScatterChart"
import "./index.scss";
import {createArray} from "../../../config/utils";
import CenterCmp from './widget/CenterCmp/CenterCmp';
import BottomCharts from "./widget/BottomCharts";
import RightChart2 from "./widget/RightChart2";
const { BorderBox1, BorderBox3, Decoration2, BorderBox8, BorderBox6, BorderBox10 } = require("@jiaminghi/data-view-react");
export default function App1() {
    document.title = "东厂设备管理平台";
    const [theme] = useState('roma');
    const [option1, setOption1] = useState({
        tooltip: {
          show: true,
        },
    
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
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
          data: createArray(10, 1000, 8),
          name: '产量',
          type: 'bar',
          itemStyle: {
            color: 'red'
          },
          barWidth: 10,
          showBackground: false,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }, // 柱状图背景
        },
      });
      useEffect(() => {
        const timer = setInterval(() => {
          setOption1({
            ...option1,
            series: {
              ...option1.series,
              data: createArray(300, 900, 8)
            }
          })
        }, 1000)
    
        return () => clearInterval(timer)
      }, [])
    return <div id="data-view">
        <div className="main-header">
            <div className="mh-middle">东厂锦衣卫管理平台</div>
        </div>

        <BorderBox1 className="main-container">
            <BorderBox3 className="left-chart-container">
                <LeftChart1 />
                <Decoration2 style={{ width: '18vw', height: '5px' }} />
                <LeftCharts2 />
                <Decoration2 style={{ width: '18vw', height: '5px' }} />
                <Echarts
                    theme={theme}
                    option={option1}
                    wrapStyle={{ height: '200px', width: '18vw', marginTop:'10px'}}
                />
            </BorderBox3>

            <div className="right-main-container">
                <div className="rmc-top-container">
                    <BorderBox8 className="rmctc-left-container">
                        <CenterCmp />
                    </BorderBox8>

                    <div className="rmctc-right-container">
                        <BorderBox10 className="rmctc-chart-1">
                            <ScatterChart />
                        </BorderBox10>

                        <BorderBox10 className="rmctc-chart-2" reverse={true}>
                            <RightChart2 />
                        </BorderBox10>
                    </div>
                </div>

                <BorderBox6 className="rmc-bottom-container">
                    <BottomCharts />
                </BorderBox6>
            </div>
        </BorderBox1>
    </div>
}