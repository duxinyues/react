import React from "react";
import "./Modal.scss"
/**
 * 参数：
 * visible：是否隐藏Modal弹窗
 * onCancel：取消事件
 * shadow：modal全局阴影
 */
function Modal({
  visible,
  onCancel = null,
  title = '',
  width = '500',
  modalShadow = false,
  children }) {
  return <div
    className={`modal-shadow ${visible ? 'active' : 'none'} ${modalShadow && 'shadow'}`}
    onClick={onCancel}
  >
    <div
      className="modal-content"
      style={{
        width: `${width}px`
      }}
    >
      <div className="modal-head">{title}</div>
      <div className="modal-center">{children}</div>
      <div className="modal-footer"><span>取消</span><span>确认</span></div>
    </div>
  </div>
}


export default Modal