import  { useState } from "react";
import HocEcharts from "../HocEcharts";

function Echarts() {
  const [theme] = useState('roma');
  const option = {
    title: {
      text: '生产情况',
      subtext: '一周的生产数据',
      left: 'left',
      show: true
    },
    tooltip: {
      show: true,
    },
    toolbox: {
      show: true,
      showTitle: true, // 隐藏默认文字，否则两者位置会重叠
      feature: {
        saveAsImage: {
          show: true,
          title: 'Save As Image'
        },
        dataView: {
          show: true,
          title: 'Data View'
        },
      },
    },
    // color: ["#003366", "#006699", "#4cabce", "#e5323e"],

    legend: {
      data: ['产量', '物料']
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: ["2012", "2013", "2014", "2015", "2016"],
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [320, 332, 301, 334, 30],
        name: '产量',
        type: 'bar',
        // itemStyle: {
        //   color: '#003366'
        // },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }, {
        type: 'bar',
        name: '物料',
        data: [220, 182, 191, 234, 290],
        // itemStyle: {
        //   color: '#4cabce',
        // }
      }
    ],
  };
  const Events = {
    click: {
      query: 'series',
      callback: function (e: any, instance: any) {
        console.log(e, '22')
        console.log(instance, '333')
      }
    },
    legendselectchanged: {
      query: 'series',
      callback: function (e: any, instance: any) {
      }
    }
  }
  return <HocEcharts
    option={option}
    className="custom-echarts-bar" // echarts的样式在styles全局设置
    theme={theme}
    isResize={true}
    showLoading={true}
    events={Events}
    wrapStyle={{ width: '700px', height: '500px' }}
  />
}

export default Echarts