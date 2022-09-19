/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-09-13 11:08:31
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-14 16:15:22
 * @FilePath: \react\src\components\React\TimersDashboard.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
class TimersDashboard extends React.Component {
    render(): React.ReactNode {
        return <div className="ui">
            <div className="column">
                <EditableTimerList />
                <ToggleableTimerForm isOpen={true} />
            </div>
        </div>
    }
}

export default TimersDashboard