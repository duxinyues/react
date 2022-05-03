import React, { useState, useEffect } from "react";
import Echarts from "../HocEcharts";
import "./dashboard.scss"
export default function Dashboard() {
  const [theme] = useState('roma');
  const option1 = {
    title: {
      text: '生产情况',
      left: 'left',
    },
    tooltip: {
      show: true,
    },
    // toolbox: {
    //   show: true,
    //   showTitle: true, // 隐藏默认文字，否则两者位置会重叠
    //   feature: {
    //     saveAsImage: {
    //       show: true,
    //       title: 'Save As Image'
    //     },
    //     dataView: {
    //       show: true,
    //       title: 'Data View'
    //     },
    //   },
    // },
    // legend: {
    //   data: ['产量', '物料']
    // },
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
    series: [
      {
        data: [320, 332, 301, 334, 30, 21, 43, 600],
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
      }
    ],
  };

  useEffect(() => {
    fetch("https://api.github.com/users/duxinyues")
      .then(response => response.json())
      .then(res => {
        console.log("res", res)
      })
      .catch(err => {
        console.log("err", err)
      })
  }, [])
  return <div>
    <div className="row">
      <Echarts
        option={option1}
        theme={theme}
        wrapStyle={{ height: '200px', width: '400px' }}
      />
    </div>
  </div>
}