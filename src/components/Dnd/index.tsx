/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-11-06 22:09:19
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-11-08 23:17:06
 * @FilePath: \react\src\components\Dnd\index.tsx
 * @Description: DnD
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { Children } from "react";
function Content({ children }:any) {
    return <div>
        {
            Children.map(children, child => {
                return <div className="Row">
                    {child}
                </div>
            })
        }
    </div>
}

function Dnd() {
    return <Content >
        <p>908</p>
        <p>909</p>
        <p>910</p>
        <p>911</p>
    </Content>
}
export default Dnd