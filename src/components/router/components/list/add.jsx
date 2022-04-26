import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from "uuid"
import './add.scss'
import logo from "../../../../logo.svg"
function AddList() {
  const [task, setTask] = useState([{id: uuidv4(),
    desc:'简介',
    isSelected: false,
    createTime: Date.now()}]);
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const inputRef = useRef(null)
  useEffect(() => {
    if (show) {
      inputRef.current?.focus();
    }
  }, [show])

  function add() {
    const newTask =  [...task]
    newTask.push({
      id: uuidv4(),
      desc,
      isSelected: false,
      createTime: Date.now()
    });
    console.log("0000",newTask)
    setTask([...newTask]);
    setDesc("");
  }
  return <div className='add'>
    <header className='add-header'>
      <img src={logo} alt="logo" className='logo' />
      <h1>React 增删该组件</h1>
    </header>
    <div className="container">
      <div className="task-head">
        <div className="title">进行中的任务</div>
        <div className="right">...</div>
      </div>
      {
        task.map((item, i) => (
          <div className="task-wrapper" key={item.id}>
            <div className='selected'></div>
            <div>{item.desc}</div>
            <div className='remove' onClick={()=>remove(item.id)}>删除</div>
          </div>
        ))
      }
      {
        show ? (
          <div className='dialog'>
            <input
              onChange={(event) => setDesc(event.target.value)}
              ref={inputRef}
              placeholder="任务简介"
              onBlur={() => { setTimeout(() => { setShow(false) }, 1000) }}
            />
            <div className='create' onClick={add}>创建</div>
          </div>
        ) : <div className='add' onClick={() => setShow(true)}>新增</div>
      }
    </div>
  </div>
}


export default AddList