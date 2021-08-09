import React from "react"
import { Input } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

function InputDome() {
    const add = () => {
        console.log("可以了！");
    }
    return <React.Fragment>
        <div style={{ width: "200px" }}>
            <Input suffix={(<EllipsisOutlined onClick={add} />)} />
        </div>
    </React.Fragment>
}
export default InputDome