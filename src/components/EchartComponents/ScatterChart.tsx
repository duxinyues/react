import Echarts from "./HocEcharts"

const defaultStyle = {  width: '900px', height: '500px' , border: '1px solid red' }
export default function ScatterChart() {
    const dataAll = [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
    ];
    const markLineOpt = {
        animation: false,
        label: {
            formatter: 'y = 0.5 * x + 3',
            align: 'right'
        },
        lineStyle: {
            type: 'solid'
        },
        tooltip: {
            formatter: 'y = 0.5 * x + 3'
        },
        data: [
            [
                {
                    coord: [0, 3],
                    symbol: 'none'
                },
                {
                    coord: [20, 13],
                    symbol: 'none'
                }
            ]
        ]
    };
    const options = {
        title: {
            text: "散点图",
            left: 'center',
        },
        // grid: {
        //     left: '0',
        //     right: '0',
        //     bottom: '0',
        //     containLabel: true
        // },
        tooltip: {
            formatter: 'Group {a}: ({c})'
        },
        xAxis: {  },
        yAxis: {},
        series: {
            symbolSize: 20,
            data: dataAll,
            type: 'scatter'
        }
    };
    return <Echarts option={options} wrapStyle={defaultStyle} />
}