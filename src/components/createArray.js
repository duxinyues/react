import React, { useState, } from "react";

function CreateArray() {
    const [arr, setArr] = useState([])
    const getScope = ({ target: { value } }) => {
        const scope = value.split(",")
        if (scope.length <= 1 || scope[1] == '' || scope.length > 2) return;
        setArr([...[...new Array(Number(scope[1]) + 1).keys()].slice(Number(scope[0]))])
    }
    console.log('arr', arr)
    return <div>
        <p>输入区间： <input onChange={getScope} placeholder='例如：2,3' /></p>
        <p>
            {
                arr.map(item => <span style={{ display: 'inline-block', width: '100px', height: '100px', textAlign: 'center', lineHeight: '100px', border: '1px solid red',marginLeft:'5px' }}>{item}</span>)
            }
        </p>
    </div >
}

export default CreateArray