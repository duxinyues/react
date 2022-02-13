import React, { useState, useMemo } from "react"

export function UseMemoComponent() {
    const [data, setData] = useState(0);
    const [step, setStep] = useState(0)
    const changeData = () => {
        let newData = data + 1
        setData(newData);

    }
    const changeStep = () => {
        let newData = step + 1;
        setStep(newData)
    }

    const bComponent = (data) => {
        console.log("组件B")
        return <span>B组件:{data}</span>
    }
    const renderB = useMemo(() => bComponent(data), [data])

    const cComponent = (data) => {
        console.log("组件C")
        return <span>C组件:{data}</span>
    }
    const renderC = useMemo(() => cComponent(step), [step])
    const A = () => {
        console.log("组件A")
        return <div>
            {renderB}
            <br />
            {renderC}
        </div>
    }
    return <div>

        <button onClick={changeData}>changeData</button> <button onClick={changeStep}>changeStep</button>
        <br />
        <A />
    </div>
}