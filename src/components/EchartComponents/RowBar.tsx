import Echarts from "./HocEcharts"

const defaultStyle = { width: '900px', height: '400px' }
/**
 *  
 */
function RowBar() {
  const options = {
    title: {
      text: '生产情况条形图',
      subtext: '一周的生产数据',
      left: 'left',
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
      boundaryGap: [0, 0.1]
    },
    yAxis: {
      type: "category",
      data: ["2012", "2013", "2014", "2015", "2016"],
      axisLabel: '',
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
    ]
  }
  return <Echarts option={options} wrapStyle={defaultStyle} />
}


export default RowBar;