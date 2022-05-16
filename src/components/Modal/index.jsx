import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from "./Modal"
import "./index.scss";
import useLocalStorage from "../../hooks/useLocalStorage";

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
  const [localStorage, setLocalStorage] = useLocalStorage("name")
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log("localStorage", JSON.parse(localStorage))
  }, [])
  return <div className="modal-dome">
    <span onClick={() => {
      setVisible(true);
      setLocalStorage({ name: new Date().getTime() })
    }}
    >modal</span>

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