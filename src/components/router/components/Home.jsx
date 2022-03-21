import React, { useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./context";
function Home() {
  let ChildRef = React.createRef();
  const navigate = useNavigate();
  const handleChild = () => {
    console.log(90, ChildRef.current.func())

    ChildRef.current.func();
  }
  return (
    <Context.Consumer>
      {
        value => {
          console.log("value", value)
          return <div>
            <h2>首页</h2>
            <div>
              <p onClick={() => {
                navigate(`/invoices/890`, { replace: true })
              }}>传参</p>
            </div>

            <div onClick={handleChild}>调用子组件方法</div>
            <Child onRef={ChildRef} />
          </div>
        }
      }
    </Context.Consumer>
  );
}

function Child({ onRef }) {
  const [data, setData] = React.useState(0)
  useImperativeHandle(onRef, () => {
    return {
      data: data,
      func: func
    }

    function func() {
      let newVal = data;
      newVal++;
      setData(newVal);
      return newVal;
    }
  })
  return <span>子组件：{data}</span>
}

export default Home