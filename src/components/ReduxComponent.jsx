import React from "react";
import ReduxChild from './ReduxChild';
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
    console.log("props", props)
    return <div>
        <span style={styles.span} onClick={() => props.increment(props.num)}>+</span>
        <span style={styles.span} onClick={() => { props.decrement(props.num) }}>-</span>

        <p>父组件：{props.num}</p>
        <ReduxChild />
    </div>
}
const mapStateToProps = (state) => {
    console.log("props", state)
    return state.allReducers
}
const mapDispatchToProps = (dispatch) => ({
    increment: value => dispatch({ type: 'increment', value: value }),
    decrement: value => dispatch({ type: 'decrement', value })
})
export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent)