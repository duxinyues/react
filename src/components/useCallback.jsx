import React, { useState, useMemo, useCallback } from "react";
function Button({ onClickBtn, text }) {
    console.log("刷新")
    return <>
        <button onClick={onClickBtn}>click</button>
        <p>{text}</p>
    </>
}

function App() {
    const [text, setText] = useState(0);
    const [count, setCount] = useState(90)
    const onBtn = useCallback(() => {
        console.log(90)
        let newText = text;
        newText++;
        setText(newText)
    }, [text])
    const renderBtn = useMemo(() => <Button onClickBtn={onBtn} text={text} />, [text, onBtn])
    return <>
        <button onClick={() => {
            let newCount = count;
            newCount++;
            setCount(newCount);
        }}>add</button> <span>{count}</span>
        <hr />
        {renderBtn}
    </>
}

export default App