/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-09-13 10:56:10
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-13 11:13:28
 * @FilePath: \react\src\components\React\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from "react";
const TimersDashboard = React.lazy(() => import('./TimersDashboard'))
class Comm extends React.Component {
    render() {
        return <React.Fragment>
            <TimersDashboard />
        </React.Fragment>
    }
}


export default Comm;