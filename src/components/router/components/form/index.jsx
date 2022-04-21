import React from "react";


function Form(props) {
  console.log("props", props)
  const onSubmit = (event) => {
    console.log("event", event.target.fieldColor)
    // event.preventDefault();
  }
  return <React.Fragment>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="fieldColor">你的颜色是：</label>
        <input type="text" name="fieldColor" />
      </div>
      <div>
        <input type='submit' value="提交" />
      </div>
    </form>
  </React.Fragment>
}


export default Form