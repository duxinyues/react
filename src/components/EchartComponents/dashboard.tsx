import React, { useState, useEffect, useRef } from "react";
import Echarts from "./HocEcharts";
import * as echarts from 'echarts';
import Test from "./Test";
import "./dashboard.scss"
import { createArray } from "../../config/utils"
export default function Dashboard() {
  const refreshRef = useRef(false)
  const [theme] = useState('roma');
  const option1 = {
    // title: {
    //   text: '生产情况',
    //   left: 'left',
    // },
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
    series: [
      {
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
      }
    ],
  };
  const option2 = {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   top: '5%',
    //   left: 'center'
    // },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  }
  useEffect(() => {
    // const timer = setInterval(() => {
    //   refreshRef.current = !refreshRef.current;
    //   console.log("===", refreshRef.current)
    // }, 1000);

    // return () => clearInterval(timer)
  }, [])
  return <div>
    <div className="row">
      <Echarts
        refresh={refreshRef.current}
        option={option1}
        theme={theme}
        wrapStyle={{ height: '200px', width: '400px',border: '1px solid black' }}
      />
      <Test />
      <Echarts
        option={option2}
        theme={theme}
        wrapStyle={{ height: '200px', width: '400px',border: '1px solid black' }}
      />
      <Echarts
        option={{
          // legend: {
          //   top: 'bottom'
          // },
          // toolbox: {
          //   show: true,
          //   feature: {
          //     mark: { show: true },
          //     dataView: { show: true, readOnly: false },
          //     restore: { show: true },
          //     saveAsImage: { show: true }
          //   }
          // },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [25, 100],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
              ]
            }
          ]
        }}
        theme={theme}
        wrapStyle={{ height: '200px', width: '400px', border: '1px solid black' }}
      />
    </div>
    <div className="row">
      <Echarts
        option={{
          title: {
            text: '流量'
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: createArray(20, 1903, 7),
              type: 'line',
              smooth: true
            },
            {
              data: createArray(20, 1903, 7),
              type: 'line',
              smooth: true
            }
          ]
        }}
        theme={theme}
        wrapStyle={{ height: '400px', width: '800px', border: "1px solid red" }}
      />
      <Echarts
        option={{
          color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
          title: {
            text: '测试'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'Line 1',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(128, 255, 165)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
              name: 'Line 2',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 221, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [120, 282, 111, 234, 220, 340, 310]
            },
            {
              name: 'Line 3',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(55, 162, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(116, 21, 219)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [320, 132, 201, 334, 190, 130, 220]
            },
            {
              name: 'Line 4',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 0, 135)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(135, 0, 157)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [220, 402, 231, 134, 190, 230, 120]
            },
            {
              name: 'Line 5',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 191, 0)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(224, 62, 76)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [220, 302, 181, 234, 210, 290, 150]
            }
          ]
        }}
        theme={theme}
        wrapStyle={{ height: '400px', width: '800px', border: "1px solid red" }}
      />
    </div>
  </div>
}