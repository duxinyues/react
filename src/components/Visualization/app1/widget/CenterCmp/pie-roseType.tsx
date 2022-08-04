/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-04 22:45:48
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-04 22:50:30
 * @FilePath: \react\src\components\Visualization\app1\widget\CenterCmp\pie-roseType.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect ,useRef} from "react";
import * as echarts from 'echarts';
import {createItems}  from "../../../../../config/utils"
const defaultStyle = { height: '45vh', width: '100%', marginTop: '5px' };
export default function PieRoseType() {
    const data = useRef(createItems(10, 500, 16)); // 默认数据
    useEffect(() => {
        const myChart = echarts.init(document.getElementById('pieRoseType') as HTMLElement);
        const updataData = () => {
            data.current = createItems(10, 500, 16)
        }
        // 绘制图表
        const  timer = setInterval(() => {
            updataData(); // 更新数据
            myChart.setOption({
                legend: {
                    top: 'bottom',
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    show: true,
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [50, 150],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8,
                            normal: {
                                borderColor: "#FFFFFF",
                                borderWidth: 1,
                                label:{
                                    show: false,
                                    formatter:'{d}%'
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: data.current
                    }
                ]
            });
        }, 2000);
        return ()=>{clearInterval(timer)}
    }, [])
    return <div id="pieRoseType" style={defaultStyle}></div>
}