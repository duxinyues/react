import React from "react";
import ReduxChild from './ReduxChild';
import { useDispatch, useSelector } from "react-redux"
const styles = {
    span: {
        display: "inline-block",
        width: "30px",
        height: '30px',
        textAlign: 'center',
        borderRadius: '2px',
        border: '1px solid green',
        marginLeft: '5px'
    }
}
function ReduxComponentUse() {
    const dispatch = useDispatch();
    const reduxProps = useSelector(state => {
        console.log("state", state)
        return state.allReducers
    })
    return <div>
        {React.createElement('p', null, 'p标签，内容是一个string')}
        <span style={styles.span} onClick={() => dispatch({ type: 'increment', value: reduxProps.num })}>+</span>
        <span style={styles.span} onClick={(e) => {
            console.log('事件', reduxProps)
            dispatch({ type: 'decrement', value: reduxProps.num })
        }}>-</span>

        <p>父组件：{reduxProps.num}</p>
        <ReduxChild />


    </div>
}
export default ReduxComponentUse

