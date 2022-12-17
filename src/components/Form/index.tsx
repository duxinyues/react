import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { FormInput, FormPassword } from "./template";
const { Option } = Select;
interface FormProps {
  items: any;
  span: number;
  formItemLayout:any
}
const AdvancedSearchForm = ({ items = [], span ,formItemLayout}: FormProps) => {
  const [form] = Form.useForm();

  const getFields = () => {
    const children = [];
    for (let i = 0; i < items.length; i++) {
      children.push(
        <Row gutter={24} key={i}>
            {items[i].map((params: any, index: number) => {
              return (
                <Col span={span} key={index}>
                  {params.type === "FormInput" && <FormInput {...params} />}
                  {params.type === "FormPassword" && (
                    <FormPassword {...params} />
                  )}
                </Col>
              );
            })}
        </Row>
      );
    }
    return children;
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  
  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      {...formItemLayout}
    >
      {getFields()}
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AdvancedSearchForm;
