import React from "react";
import "./index.scss";
import AdvancedSearchForm from "../Form";

function WordClassification() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const formItems = [
    [
      {
        type: "FormInput",
        label: "姓名",
        name: "username",
        placeholder: "姓名",
        rules: [
          {
            required: true,
            message: "请输入姓名！",
          },
        ],
      },
      {
        type: "FormPassword",
        label: "密码",
        name: "password",
        placeholder: "密码",
        rules: [
          {
            required: true,
            message: "请输入密码！",
          },
        ],
      },
      {
        type: "FormPassword",
        label: "密码",
        name: "password",
        placeholder: "密码",
        rules: [
          {
            required: true,
            message: "请输入密码！",
          },
        ],
      },
      {
        type: "FormPassword",
        label: "密码",
        name: "password",
        placeholder: "密码",
        rules: [
          {
            required: true,
            message: "请输入密码！",
          },
        ],
      },
    ],
    [
      {
        type: "FormPassword",
        label: "密码90",
        name: "password",
        placeholder: "密码",
        rules: [
          {
            required: true,
            message: "请输入密码！",
          },
        ],
      },
    ],
  ];
  return <AdvancedSearchForm items={formItems} span={6} formItemLayout={formItemLayout}/>;
}

export default WordClassification;
