/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-09 22:41:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-09 23:37:10
 * @FilePath: \react\src\components\moveable\index.tsx
 * @Description: react-moveable的应用
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import Moveable from "react-moveable";
import { flushSync } from "react-dom";
import "./index.scss"
export default function MoveableComponent() {
    return <div>
        <div className="container"><div id="move">Move</div></div>
        <Moveable
            flushSync={flushSync}
            target={document.getElementById("#move")}
            draggable={true}
            snappable
            snapGap={true}
            snapElement={true}
            snapVertical={true}
            snapHorizontal={true}
            snapCenter={true}
        />
    </div>
}