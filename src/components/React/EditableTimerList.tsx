/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-09-13 11:13:53
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-14 16:30:59
 * @FilePath: \react\src\components\React\EditableTimerList.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import EditableTimer from "./EditableTimer";
function EditableTimerList() {
    return <div className="timers">
        <EditableTimer
            title='React'
            project='web'
            elapsed='8786'
            runningSince=''
            editFormOpen={false}
        />
    </div>
}
export default EditableTimerList;