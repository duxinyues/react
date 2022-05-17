import React from "react";
import DXForm from "./DXForm";
const styles = {
  width: '500px',
  border: '1px solid black',
  padding: '10px',
}
function Form(props) {
  const formData = [{
    label: '姓名',
    name: 'usename',
    rules: [{ required: true, message: '请输入姓名' }],
    type: 'input',
  }]
  return <React.Fragment>
    <div style={styles}>
      <DXForm formData={formData} />
    </div>
  </React.Fragment>
}


export default Form