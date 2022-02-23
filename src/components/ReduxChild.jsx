import React from "react";
import { connect } from 'react-redux'
function ReduxChild(props) {
    return <div>

        <button onClick={()=>props.clear()}>clear</button>

        <p>Redux 的子组件：{props.num}</p>
    </div>
}
const mapStateToProps = (state) => {
    return state.allReducers
}
const mapDispatchToProps = dispatch => ({
    clear: () => dispatch({ type: 'clear' })
})
export default connect(mapStateToProps, mapDispatchToProps)(ReduxChild) 