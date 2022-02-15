import React, { useState } from "react";
import { Popover, Button } from "antd";

export default function PopoverMenu() {
    const [visible, setVisible] = useState(false);
    const [select, setSelect] = useState([]);
    const menu = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const onSelect = (value) => {
        if (select.some(item => item == value)) return
        setSelect([...select, value])
    }
    const content = (
        <div className="menu1">
            {
                menu.map(item => <span className={`${select.indexOf(item) >= 0 && 'active'}`} onClick={() => { onSelect(item) }}>{item}</span>)
            }
        </div>
    );

    const onCancel = (value) => {
        const defaultValue = select.filter(item => item != value);
        setSelect(defaultValue)
    }
    return <div className="popover-menu">
        <div>
            <div>
                <Popover
                    content={content}
                    trigger="click"
                    visible={visible}
                    onVisibleChange={(visible) => setVisible(visible)}
                >
                    <Button type="primary">添加</Button>
                </Popover>
            </div>

            <p>
                {
                    select.map(item => <span onClick={() => onCancel(item)}>{item}</span>)
                }
            </p>
        </div>
    </div>
}