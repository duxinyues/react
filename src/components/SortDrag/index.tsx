/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Tree } from 'antd';
import type { DataNode, DirectoryTreeProps } from 'antd/lib/tree';
const { DirectoryTree } = Tree;
function swap(arr: any, oldIndex: number, newIndex: number) {
    [arr[oldIndex], arr[newIndex]] = [arr[newIndex], arr[oldIndex]]
    return arr;
}
let treeData: DataNode[] = [
    {
        title: 'parent 0',
        key: '0-0',
        children: [
            { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
            { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
            { title: 'leaf 0-2', key: '0-0-2', isLeaf: true },
            { title: 'leaf 0-3', key: '0-0-3', isLeaf: true },
        ],
    },
    {
        title: 'parent 1',
        key: '0-1',
        children: [
            { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
            { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
            { title: 'leaf 1-2', key: '0-1-2', isLeaf: true },
            { title: 'leaf 1-3', key: '0-1-3', isLeaf: true },
        ],
    },
    {
        title: 'parent 2',
        key: '0-2',
        children: [
            { title: 'leaf 2-0', key: '0-2-0', isLeaf: true },
            { title: 'leaf 2-1', key: '0-2-1', isLeaf: true },
            { title: 'leaf 2-2', key: '0-2-2', isLeaf: true },
        ],
    },
];

const SortDrag: React.FC = () => {
    const [gData, setGData] = useState(treeData);
    const [child, setChild] = useState<DataNode[]>([
        { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
        { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
        { title: 'leaf 0-2', key: '0-0-2', isLeaf: true },
        { title: 'leaf 0-3', key: '0-0-3', isLeaf: true },
    ]);
    const [expandKey, setExpandKey] = useState(['0-0'])
    const onSelect: DirectoryTreeProps['onSelect'] = (keys: any, info: any) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand: DirectoryTreeProps['onExpand'] = (keys: any, info: any) => {
        if (keys.length === 2) {
            setExpandKey([keys.pop()])
        } else {
            setExpandKey(keys);
        }

        setChild([...info.node.children])
    };
    const onDrop = (info: any) => {
        const dropKey = info.node.props.eventKey; // 移动的元素
        const dragKey = info.dragNode.props.eventKey; // 拖拽的元素
        const isDragParentNode = gData.some(item => item.key == dragKey);
        const isDropParentNode = gData.some(item => item.key == dropKey)
        // 拖拽父节点，禁止父节点插入子节点队列
        if (isDragParentNode && isDropParentNode) {
            const dragIndex = gData.findIndex(item => item.key == dragKey);
            const dropIndex = gData.findIndex(item => item.key == dropKey);
            setGData([...swap(gData, dragIndex, dropIndex)])
        }

        const isDragChildNode = child.some(item => item.key == dragKey);
        const isDropChildNode = child.some(item => item.key == dropKey);
        if (isDragChildNode && isDropChildNode) {
            const dragIndex = child.findIndex(item => item.key == dragKey);
            const dropIndex = child.findIndex(item => item.key == dropKey);
            console.log(908, dragIndex, dropIndex)
            let newGData = gData;
            newGData.forEach(item => {
                if (item.key == expandKey[0]) {
                    item.children = [...swap(child, dragIndex, dropIndex)]
                }
            });

            setGData([...newGData])
        }
    }
    return <DirectoryTree
        draggable
        blockNode
        defaultExpandedKeys={expandKey}
        expandedKeys={expandKey}
        onExpand={onExpand}
        onSelect={onSelect}
        treeData={gData}
        onDrop={onDrop} />
}

export default SortDrag