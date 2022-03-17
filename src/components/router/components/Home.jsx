import React from "react";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  const history = createBrowserHistory({
    basename: "",
    forceRefresh: true,
  });

  console.log("history", history)
  return (
    <div>
      <h2>首页</h2>
      <div><p onClick={() => {
        navigate(`/invoices/890`, { replace: true })
      }}>传参</p></div>
    </div>
  );
}

export default Home