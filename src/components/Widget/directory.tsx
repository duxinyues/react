/*
 * @Author: 韦永愿 1638877065@qq.com
 * @Date: 2022-08-12 08:49:42
 * @LastEditors: 韦永愿 1638877065@qq.com
 * @LastEditTime: 2022-08-12 11:33:25
 * @FilePath: \react\src\components\Editor\index.tsx
 * @Description: 
 * Copyright (c) 2022 by 韦永愿 email: 1638877065@qq.com, All Rights Reserved.
 */
import React, { useState, useEffect } from "react"
import { Tree } from "antd";
import { useSelector } from 'react-redux';

function Editor() {
    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
    const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

    const onExpand = (expandedKeysValue: any) => {
        console.log('onExpand', expandedKeysValue); // if not set autoExpandParent to 
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };

    const onCheck = (checkedKeysValue:any,info:any) => {

        console.log('onCheck', checkedKeysValue,info);
        setCheckedKeys(checkedKeysValue);
    };

    const onSelect = (selectedKeysValue: React.Key[], info: any) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
        const newCheckedKeys = [...checkedKeys, ...selectedKeysValue]
        console.log("=====", newCheckedKeys)
        setCheckedKeys(newCheckedKeys);
    };
    const { menus } = useSelector((state: any) => {
        return {
            menus: state.menus,
        }
    })
    useEffect(() => {
        console.log("导航数据", menus)
        const openKeys = menus.map((item: any) => item.key);
        // setExpandedKeys(openKeys);
    }, [])

    return <Tree
        checkable
        treeData={menus}
        onExpand={onExpand}
        // expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        defaultExpandAll={true}
    />
}
export default Editor