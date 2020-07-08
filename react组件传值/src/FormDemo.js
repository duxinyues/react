import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
 
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class NormalLoginForm extends Component {
 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
      </Form>
    );
  }
}
 
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
 
export default WrappedNormalLoginForm;