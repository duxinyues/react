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
  onOk = null,
  title = '',
  width = '500',
  modalShadow = false,
  footer = true,
  children }) {
  return <div
    className={`modal-shadow ${visible ? 'active' : 'none'} ${modalShadow && 'shadow'}`}
  >
    <div
      className="modal-content"
      style={{
        width: `${width}px`
      }}
    >
      <div className="modal-head">
        {title}
        <span onClick={onCancel}>X</span>
      </div>
      <div className="modal-center">{children}</div>
      {
        footer && <div className="modal-footer">
          <span className="btn-cancel" onClick={onCancel}>取消</span>
          <span className="btn-confirm" onClick={onOk}>确认</span>
        </div>
      }
    </div>
  </div>
}


export default Modal