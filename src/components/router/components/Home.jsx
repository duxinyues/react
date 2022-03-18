import React from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./context";
function Home() {
  const navigate = useNavigate()

  React.useEffect(() => {
  }, [])
  return (
    <Context.Consumer>
      {
        value => {
          console.log("value", value)
          return <div>
            <h2>首页</h2>
            <div><p onClick={() => {
              navigate(`/invoices/890`, { replace: true })
            }}>传参</p></div>
          </div>
        }
      }
    </Context.Consumer>
  );
}
export default Home