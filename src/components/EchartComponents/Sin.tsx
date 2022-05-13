import Echarts from "./HocEcharts";
export default function Sin() {
  document.title = "三角函数";
  function func(x: number) {
    return Math.sin(x);
  }
  function generateData() {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) {
      data.push([i, func(i)]);
    }
    return data;
  }

  const options = {
    animation: true,
    grid: {
      top: 40,
      left: 50,
      right: 40,
      bottom: 50
    },
    xAxis: {
      name: 'x',
      minorTick: {
        show: true
      },
      minorSplitLine: {
        show: true
      }
    },
    yAxis: {
      name: 'y',
      min: -100,
      max: 100,
      minorTick: {
        show: true
      },
      minorSplitLine: {
        show: true
      }
    },
    dataZoom: [
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: -20,
        endValue: 20
      },
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        yAxisIndex: [0],
        startValue: -20,
        endValue: 20
      }
    ],
    series: [
      {
        type: 'bar',
        showSymbol: false,
        clip: true,
        data: generateData()
      }
    ]
  }
  return <Echarts
    theme="roma"
    option={options}
    wrapStyle={{
      width: "1300px",
      height: '1200px'
    }}
  />
}