import React from "react";
import ReduxChild from './ReduxChild';
import useCountdownHook from "../hooks/useCountdownHook";
import useTimers from "../hooks/useTimer";
import { connect } from "react-redux"
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
function ReduxComponent(props) {
    // const { count,start } = useCountdownHook(10);
    const { num, start, clear } = useTimers()
    return <div>
        <span style={styles.span} onClick={() => props.increment(props.num)}>+</span>
        <span style={styles.span} onClick={() => { props.decrement(props.num) }}>-</span>

        <p>父组件：{props.num}</p>
        {/* <p>倒计时：{count}s</p> */}
        <p>定时器：{num}s</p>
        <p><button onClick={() => clear()}>暂停</button></p>
        <p><button onClick={() => start()}>开始</button></p>
        <ReduxChild />
    </div>
}
const mapStateToProps = (state) => {
    return state.allReducers
}
const mapDispatchToProps = (dispatch) => ({
    increment: value => dispatch({ type: 'increment', value }),
    decrement: value => dispatch({ type: 'decrement', value })
})
export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent)