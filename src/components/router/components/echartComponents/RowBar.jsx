import React, { useEffect } from "react"
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);
const defaultStyle = { width: '900px', height: '400px'}
/**
 *  
 */
function RowBar() {
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('bar'));
    const options = {
      title: {
        text: '生产情况条形图',
        subtext: '一周的生产数据',
        left: 'center',
        show: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      color: ["#003366", "#006699", "#4cabce", "#e5323e"],

      legend: {},
      grid: {
        left: '1%',
        right: '1%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: '', // 隐藏x轴的label标签
        show: false, // 隐藏Y轴方向的刻度线
        boundaryGap:[0,0.1]
      },
      yAxis: {
        type: "category",
        data: ["2012", "2013", "2014", "2015", "2016"],
        axisLabel:'',
        show: false,
      },
      series: [
        {
          data: [320, 332, 301, 334, 30],
          name: '产能',
          type: 'bar',
          itemStyle: {
            color: '#003366'
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          barWidth: 10
        }, {
          type: 'bar',
          name: '耗能',
          data: [220, 182, 191, 234, 290],
          itemStyle: {
            color: '#4cabce',
          },
          barWidth: 10
        }
      ],
    }
    // 绘制图表
    myChart.setOption(options);
  }, [])
  return <div id="bar" style={defaultStyle}></div>
}


export default RowBar;