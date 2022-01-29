import React, { useState, useMemo } from "react"

export function UseMemoComponent() {
    const [data, setData] = useState(0);
    const [step, setStep] = useState(0)
    const add = () => {
        let newData = data + 1
        setData(newData);
        setStep(newData)
    }
    const renderDatat = useMemo(() => {
        return <span>{data}</span>
    }, [step])
    return <div>
        <button onClick={add}>click</button>
        {renderDatat}
    </div>
}