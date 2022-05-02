import React, { useEffect } from 'react';
import Echarts from "../HocEcharts"
const defaultStyle = { width: '900px', height: '500px' }

function RadialPolar() {
  const options = {
    title: [
      {
        text: '读心悦同学的周考成绩分布图'
      }
    ],
    polar: {
      radius: [20, '80%']
    },
    radiusAxis: {
      max: 150,
      show: false
    },
    angleAxis: {
      type: 'category',
      data: ['英语', '数学', '语文', '物理'],
      startAngle: 0,
      show: false
    },
    tooltip: {},
    series: {
      type: 'line',
      data: [98, 124, 150, 103],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    },
    backgroundColor: '#fff',
    animation: false
  };
  return <Echarts
    option={options}
    wrapStyle={defaultStyle}
  />
}

export default RadialPolar