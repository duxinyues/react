/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-09-29 22:45:07
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-29 22:46:24
 * @FilePath: \react\src\components\React\Select\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const SelectCom: React.FC = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
);

export default SelectCom;