/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-09-14 16:20:29
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-17 15:46:23
 * @FilePath: \react\src\components\React\EditableTimer.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import TimerForm from './TimerForm';
import   Timer from './Timer'
interface EditableTimerProps {
    title: string;
    project: string;
    elapsed: string;
    runningSince: {};
    editFormOpen: boolean
}
function EditableTimer(props: EditableTimerProps) {
    const { title, project, editFormOpen, elapsed, runningSince } = props;
    return <div>
        <TimerForm
            // title={title}
            // project={project}
        />
    </div>
}
export default EditableTimer;