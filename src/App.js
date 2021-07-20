/*
 * @Author: your name
 * @Date: 2021-07-10 15:03:42
 * @LastEditTime: 2021-07-11 10:38:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hook\src\App.js
 */
import { useState, useEffect } from "react"
import Child from "./child"
function App() {
  const [data, setData] = useState(0);
  const [showChild, setShowChild] = useState(true);
  useEffect(() => {
    const todoList = document.getElementById("todoList");
    const newItem = document.createElement("li");
    newItem.innerHTML = `这是第${data}个TODO`;
    todoList.append(newItem)
  })
  const add = () => {
    setData(data + 1);
    setShowChild(false)
  }
  return <>
    <button onClick={add}>add</button>
    <p>当前共`${data}`个TODO Item</p>
    <ul id="todoList"></ul>

    <div>
      {showChild && <Child />}
    </div>
  </>
}

export default App;
