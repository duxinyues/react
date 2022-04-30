import React, { useState, } from "react";
import Modal from "./Modal"
import "./index.scss";
function ModalDome() {
  const [visible, setVisible] = useState(false);
  return <div className="modal-dome">
    <span onClick={() => { setVisible(true) }}>modal</span>

    <Modal
      title="弹窗标题"
      modalShadow='true'
      visible={visible}
      onCancel={() => {
        setVisible(false)
        console.log("取消")
      }}
      onOk={()=>{
        alert("点击确认按钮")
      }}
    >

      弹窗子组件
    </Modal>
  </div>
}

export default ModalDome