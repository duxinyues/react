/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Switch,
  TreeSelect,
  InputNumber,
  Checkbox,
  Row,
  Col,
  TimePicker,
  Button,
  Upload,
  Cascader,
} from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// -----------------------------FormInput------------------------------------
/**
 * 表单输入框
 *
 * @param {any} props
 * @returns
 */
export function FormInput(props: any) {
  const { disabled, placeholder, onChange, addonAfter, suffix, ...formProps } =
    props;
  return (
    <Form.Item {...formProps}>
      <Input
        allowClear
        disabled={disabled}
        placeholder={placeholder || '请输入'}
        addonAfter={addonAfter}
        onChange={onChange}
        suffix={suffix}
      />
    </Form.Item>
  );
}

// -----------------------------RangeFormInput------------------------------------
/**
 * 范围表单输入框
 *
 * @param {any} props
 * @returns
 */
export function RangeFormInput(props: any) {
  const {
    disabled,
    placeholder,
    onChange,
    addonAfter,
    suffix,
    text,
    name,
    ...formProps
  } = props;
  return (
    <Input.Group>
      <Row gutter={8} justify="space-around" align="middle">
        <Col span={14}>
          <Form.Item {...formProps} name={name[0]}>
            <Input
              allowClear
              disabled={disabled}
              placeholder={placeholder || '请输入'}
              addonAfter={addonAfter}
              onChange={onChange}
              suffix={suffix}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={name[1]}>
            <Input
              allowClear
              disabled={disabled}
              placeholder={placeholder || '请输入'}
              addonAfter={addonAfter}
              onChange={onChange}
              suffix={suffix}
            />
          </Form.Item>
        </Col>
      </Row>
    </Input.Group>
  );
}
// -----------------------------FormInputSearch------------------------------------
/**
 * 表单搜索输入框
 *
 * @param {any} props
 * @returns
 */
export function FormInputSearch(props: any) {
  const { disabled, placeholder, onChange, onSearch, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <Input.Search
        allowClear
        placeholder={placeholder || '请输入'}
        onChange={onChange}
        disabled={disabled}
        onSearch={onSearch}
      />
    </Form.Item>
  );
}
// -----------------------------FormInputNumber------------------------------------
/**
 * 数字输入框
 *
 * @param {any} props
 * @returns
 */
export function FormInputNumber(props: any) {
  const { disabled, min, max, percent, formatter, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      {percent ? (
        <InputNumber
          disabled={disabled}
          formatter={(value) => `${value}%`}
          parser={(value: any) => value!.replace('%', '')}
        />
      ) : (
        <InputNumber
          min={min}
          max={max}
          formatter={formatter}
          disabled={disabled}
        />
      )}
    </Form.Item>
  );
}
// -----------------------------FormPassword------------------------------------
/**
 * 密码输入框
 *
 * @param {any} props
 * @returns
 */
export function FormPassword(props: any) {
  const { disabled, placeholder, onChange, ...formProps } = props;

  return (
    <Form.Item {...formProps}>
      <Input.Password
        allowClear
        disabled={disabled}
        placeholder={placeholder || '请输入'}
        onChange={onChange}
      />
    </Form.Item>
  );
}

// -----------------------------FormSelect------------------------------------
/**
 * 表单下拉框
 *
 * @param {any} props
 * @returns
 */
export function FormSelect(props: any) {
  const {
    disabled,
    placeholder,
    items,
    keys,
    title,
    onChange,
    mode,
    showSearch,
    ...formProps
  } = props;
  return (
    <Form.Item {...formProps}>
      <Select
        mode={mode}
        allowClear
        disabled={disabled}
        placeholder={placeholder || '请选择'}
        showSearch={showSearch}
        optionFilterProp="children"
        onChange={onChange}
        fieldNames={{ label: title, value: keys }}
        filterOption={(inputValue: string, option: any) =>
          option?.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
        }
        options={items}
      />
    </Form.Item>
  );
}
// -----------------------------FormCascader------------------------------------
/**
 * 级联下拉框
 *
 * @param {any} props
 * @returns
 */
export function FormCascader(props: any) {
  const { disabled, placeholder, items, onChange, fieldNames, ...formProps } =
    props;
  return (
    <Form.Item {...formProps}>
      <Cascader
        allowClear
        options={items}
        fieldNames={fieldNames}
        placeholder={placeholder || '请选择'}
        disabled={disabled}
        onChange={onChange}
      />
    </Form.Item>
  );
}

// -----------------------------FormTreeSelect------------------------------------
/**
 * 表单树选择
 *
 * @param {any} props
 * @returns
 */
export function FormTreeSelect(props: any) {
  const {
    disabled,
    dropdownStyle,
    placeholder,
    treeData,
    onChange,
    keys,
    title,
    defaultExpandAll,
    ...formProps
  } = props;
  return (
    <Form.Item {...formProps}>
      <TreeSelect
        allowClear
        showSearch
        style={{ width: '100%' }}
        disabled={disabled}
        treeNodeFilterProp={title}
        dropdownStyle={dropdownStyle || { maxHeight: 400, overflow: 'auto' }}
        placeholder={placeholder || '请选择'}
        treeData={treeData}
        treeDefaultExpandAll={defaultExpandAll}
        onChange={onChange}
        fieldNames={{ label: title, value: keys }}
      />
    </Form.Item>
  );
}

// -----------------------------FormRadio------------------------------------
/**
 * 表单radio选择框
 *
 * @param {any} props
 * @returns
 */
export function FormRadio(props: any) {
  const { disabled, items, defaultValue, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <Radio.Group disabled={disabled} defaultValue={defaultValue}>
        {items.map((item: any) => (
          <Radio key={item.value} value={item.value}>
            {item.text}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}

// -----------------------------FormTime------------------------------------
/**
 * 表单时间选择器
 *
 * @param {any} props
 * @return {*}
 */
export function FormTime(props: any) {
  const {
    disabled,
    subtype = 'dateTime',
    placeholder,
    onChange,
    allowClear = true,
    valueTime,
    ...formProps
  } = props;
  return (
    <Form.Item {...formProps}>
      {subtype === 'time' ? (
        <TimePicker
          allowClear={allowClear}
          disabled={disabled}
          placeholder={placeholder}
          minuteStep={15}
          format="HH:mm"
          onChange={onChange}
          style={{ width: '100%' }}
        />
      ) : subtype === 'date' ? (
        <DatePicker
          allowClear={allowClear}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          format="YYYY-MM-DD"
        />
      ) : subtype === 'month' ? (
        <DatePicker
          allowClear={allowClear}
          disabled={disabled}
          defaultValue={valueTime}
          placeholder={placeholder}
          onChange={onChange}
          picker='month'
        />
      ) : (
        <DatePicker
          allowClear={allowClear}
          disabled={disabled}
          placeholder={placeholder}
          showTime
          onChange={onChange}
          format="YYYY-MM-DD HH:mm"
        />
      )}
    </Form.Item>
  );
}

// -----------------------------FormTimeRange------------------------------------
const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i += 1) {
    result.push(i);
  }
  return result;
};
const disabledRangeTime = () => ({
  disabledMinutes: () => range(1, 30).concat(range(31, 60)),
});
const disabledDate = (current: Moment) =>
  // Can not select days before today
  current < moment().endOf('day');
/**
 * 表单时间范围选择框
 *
 * @param {any} props
 * @returns
 */
export function FormTimeRange(props: any) {
  const { disabled, onChange, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <DatePicker.RangePicker
        allowClear
        disabled={disabled}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [
            moment('00:00:00', 'HH:mm:ss'),
            moment('23:59:59', 'HH:mm:ss'),
          ],
        }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
}

/**
 * 表单时间(日期)范围选择框
 *
 * @param {any} props
 * @returns
 */
export function FormDateRange(props: any) {
  const { disabled, onChange, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <DatePicker.RangePicker
        allowClear
        disabled={disabled}
        format="YYYY-MM-DD"
        onChange={onChange}
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
}

// -----------------------------FormTextArea------------------------------------
export function FormTextArea(props: any) {
  const {
    disabled,
    rows = 4,
    showCount,
    maxLength,
    placeholder,
    ...formProps
  } = props;
  return (
    <div>
      <Form.Item {...formProps}>
        <TextArea
          disabled={disabled}
          rows={rows}
          showCount={showCount}
          maxLength={maxLength}
          placeholder={placeholder || '请输入'}
        />
      </Form.Item>
    </div>
  );
}

// -----------------------------FormSwitch------------------------------------
export function FormSwitch(props: any) {
  const { disabled, onChange, ...formProps } = props;
  return (
    <Form.Item {...formProps} valuePropName="checked">
      <Switch disabled={disabled} defaultChecked onChange={onChange} />
    </Form.Item>
  );
}

// -----------------------------FormCustom------------------------------------
export function FormCustom(props: any) {
  const { children, ...formProps } = props;
  return <Form.Item {...formProps}>{children}</Form.Item>;
}

// -----------------------------FormCheckbox------------------------------------
/**
 * 表单Checkbox选择框
 *
 * @param {any} props
 * @returns
 */
export function FormCheckbox(props: any) {
  const {
    disabled,
    items,
    desc,
    colNum = 6,
    defaultValue,
    ...formProps
  } = props;
  return (
    <Form.Item {...formProps}>
      {desc ? <Checkbox disabled={disabled}>{desc}</Checkbox> : ''}

      {items ? (
        <Checkbox.Group disabled={disabled} defaultValue={defaultValue}>
          <Row>
            {items?.map((item: any) => (
              <Col span={colNum} key={item.value}>
                <Checkbox key={item.value} value={item.value} />
                {item.text}
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      ) : (
        ''
      )}
    </Form.Item>
  );
}

/**
 * 表单上传
 *
 * @param {any} props
 * @returns
 */
export function FormUpload(props: any) {
  const { disabled, name, normFile, accept, uploadProps, ...formProps } = props;
  return (
    <Form.Item
      {...formProps}
      name={name}
      valuePropName="fileList"
      getValueFromEvent={normFile}
    >
      <Upload {...uploadProps} disabled={disabled} accept={accept}>
        <Button icon={<UploadOutlined />}>上传附件</Button>
      </Upload>
    </Form.Item>
  );
}

export function FormButton(props: any) {
  const { disabled, text, onClick, ghost, block, ...formProps } = props;
  return (
    <Form.Item {...formProps}>
      <Button disabled={disabled} onClick={onClick} ghost={ghost} block={block}>
        {text}
      </Button>
    </Form.Item>
  );
}
