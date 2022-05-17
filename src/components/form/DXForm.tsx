/**
 * 自定义form表单
 */
import { useState, Component } from "react"
import { Form, Input, Button, Checkbox } from 'antd';
export default function DXForm({ formData: [], }) {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
}


function App() {
  const [num, setNum] = useState(0);
  const click = () => {
    setTimeout(() => {
      console.log(num);
    }, 3000);
    setNum(num + 1);
  };

  return <div onClick={click}>click {num}</div>;
}

class App1 extends Component {
  state = {
    num: 0
  };

  click = () => {
    setTimeout(() => {
      console.log(this.state.num);
    }, 3000);
    this.setState({ num: this.state.num + 1 });
  };

  render() {
    return <div onClick={this.click}>click {this.state.num}</div>;
  }
}