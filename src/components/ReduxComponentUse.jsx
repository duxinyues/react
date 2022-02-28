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
function ReduxComponent() {
    const dispatch = useDispatch();
    const reduxProps = useSelector(state => {
        return state.allReducers
    })
    return <div>
        <span style={styles.span} onClick={() => dispatch({ type: 'increment', value: reduxProps.num })}>+</span>
        <span style={styles.span} onClick={() => { dispatch({ type: 'decrement', value: reduxProps.num }) }}>-</span>

        <p>父组件：{reduxProps.num}</p>
        <ReduxChild />
    </div>
}
export default ReduxComponent

