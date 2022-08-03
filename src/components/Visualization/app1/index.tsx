/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-03 22:42:17
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-03 23:28:16
 * @FilePath: \react\src\components\Visualization\app1\index.tsx
 * @Description: 可视化
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import LeftChart1 from "./widget/LeftChart1";
import LeftCharts2 from "./widget/LeftCharts2";
import "./index.scss"
const { BorderBox1, BorderBox3, Decoration2, BorderBox8, BorderBox6, BorderBox10 } = require("@jiaminghi/data-view-react");
export default function App1() {
    document.title = "东厂设备管理平台"
    return <div id="data-view">
        <div className="main-header">
            <div className="mh-middle">东厂设备管理平台</div>
        </div>

        <BorderBox1 className="main-container">
            <BorderBox3 className="left-chart-container">
                <LeftChart1 />
                <Decoration2 style={{ width: '400px', height: '5px' }} />
                <LeftCharts2 />
                <Decoration2 style={{ width: '400px', height: '5px' }} />
                {/* <Bar /> */}
            </BorderBox3>

            <div className="right-main-container">
                <div className="rmc-top-container">
                    <BorderBox8 className="rmctc-left-container">
                        {/* <CenterCmp /> */}
                    </BorderBox8>

                    <div className="rmctc-right-container">
                        <BorderBox10 className="rmctc-chart-1">
                            {/* <RightChart1 /> */}right1
                        </BorderBox10>

                        <BorderBox10 className="rmctc-chart-2" reverse={true}>
                            {/* <RightChart2 /> */}right2
                        </BorderBox10>
                    </div>
                </div>

                <BorderBox6 className="rmc-bottom-container">
                    {/* <BottomCharts /> */}
                </BorderBox6>
            </div>
        </BorderBox1>
    </div>
}