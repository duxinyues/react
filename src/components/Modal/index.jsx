import { useState,  } from "react";
// import Modal from "./Modal"
import "./index.scss";
import { Modal, Form, Input } from "antd";
function ModalDome() {
  const [visible, setVisible] = useState(false);

  const onFinish = () => {

  }
  return <div className="modal-dome">
    <span onClick={() => {
      setVisible(true);
    }}
    >modal</span>


    <Modal
      visible={visible}
      onOk={() => { }}
      onCancel={() => { }}
      okText='确定'
      cancelText="取消"
    >
      <Form
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name='username'
          rules={[{
            required: true,
            message: '请输入用户名'
          }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='pwd'
          rules={[{
            required: true,
            message: '密码'
          }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>

    {/* <Modal
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
    </Modal> */}
  </div>
}

export default ModalDome