import React, { Component } from 'react';
import { Modal } from 'antd';
import WrappedNormalLoginForm from './FormDemo';
//Modal代码
class ModalDemo extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: true,
    confirmLoading: false,
  }
  handleOk = (e) => {//点击对话框OK按钮触发的事件
    console.log();
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: false,
      visible:true
    });//上面的代码可以忽略
    let demo=this.refs.getFormVlaue;//通过refs属性可以获得对话框内form对象
    demo.validateFields((err, values) => {
      if(!err){
        console.log(values);//这里可以拿到数据
      }
    });
  }
  handleCancel = () => {//点击取消按钮触发的事件
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <WrappedNormalLoginForm ref="getFormVlaue" />//增加ref属性，目的是获得form对象
        </Modal>
      </div>
    );
  }
}
 
export default ModalDemo;