import React, { useState, useEffect } from "react"
export default function Child() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("挂载阶段")
        setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return ()=>{
            console.log("卸载阶段")
        }
    })
    return <div>
        这是子组件{count}
    </div>
}
