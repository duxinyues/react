import React, { useEffect } from "react"
import * as echarts from 'echarts';
function Bar() {
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('bar'));
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
    // 绘制图表
    myChart.setOption(option);
  }, [])
  return <div id="bar" style={{ width: '500px', height: '500px' }}>
    柱状图
  </div>
}


export default Bar;