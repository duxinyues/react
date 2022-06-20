import { Tree } from "antd";
import { useState } from "react";
const { TreeNode, DirectoryTree } = Tree;
function swap(arr: any, oldIndex: number, newIndex: number) {
    [arr[oldIndex], arr[newIndex]] = [arr[newIndex], arr[oldIndex]]
    return arr;
}
export default function SortDrag() {
    const [parent, setParent] = useState([10, 20, 30, 40, 50]);
    const [child, setChild] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 21])
    const onDrop = (info: any) => {
        const dropKey = info.node.props.eventKey; // 移动的元素
        const dragKey = info.dragNode.props.eventKey; // 拖拽的元素
        const dropPos = info.node.props.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // 向上移动还是向下移动
        console.log("====", dropKey, dragKey, dropPosition)
        // 拖拽父节点
        const isDragParentNode = parent.some(item =>item == dragKey);
        console.log(323423, isDragParentNode)
        if (isDragParentNode) {
            console.log(323423)
            const dragIndex = parent.findIndex(item => item == dragKey);
            const dropIndex = parent.findIndex(item => item == dropKey);
            // console.log(swap(parent, dragIndex, dropIndex))
            setParent([...swap(parent, dragIndex, dropIndex)])
        }
    }
    return <DirectoryTree draggable
        blockNode
        onDrop={onDrop}>
        {parent.map((item, index) => (<TreeNode title={item} key={item} >
            {child.map((its, key) => (<TreeNode title={its} key={its} />))}
        </TreeNode>))}
    </DirectoryTree>
}