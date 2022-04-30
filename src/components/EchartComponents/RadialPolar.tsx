import React, { useEffect } from 'react';
import * as echarts from 'echarts';
const defaultStyle = { width: '1000px', height: '500px' }
function RadialPolar() {
  useEffect(() => {
    const root = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(root);
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
    // 绘制图表
    myChart.setOption(options);
  })
  return <div id="main" style={defaultStyle}></div>
}

export default RadialPolar