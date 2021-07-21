import React, { useState, useEffect } from "react"
export default function Child() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("挂载阶段")
        setInterval(() => {
            setCount(count + 1)
        }, 50000)
        return ()=>{
            setCount(0)
            console.log("卸载阶段")
        }
    },[count])
    const [name,setName] = useState("duxin");
    useEffect(()=>{
       setTimeout(() => {
        setName("读心")
       }, 4000); 
    })
    return <div>
        这是子组件{count}

        <p>姓名：{name}</p>
    </div>
}
