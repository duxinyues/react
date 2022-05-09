import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from "./Modal"
import "./index.scss";

function useInterval(callback, time) {
  const ref = useRef(callback)
  useLayoutEffect(() => {
    ref.current = callback
  })

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current()
    }, time)

    return () => clearInterval(timer)
  }, [])
}
function ModalDome() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count => count + 1)
  }, 1000)
  useInterval(() => {
    // console.log(count)
  }, 1000)
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
      onOk={() => {
        alert("点击确认按钮")
      }}
    >

      弹窗子组件
    </Modal>
  </div>
}

export default ModalDome