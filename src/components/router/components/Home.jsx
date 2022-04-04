import React from "react";
import Bar from "./echartComponents/Bar";
function Home() {
  const style = {
    width: "400px",
    height: "400px",
    border: '1px solid blue',
  }
  const data = [1, 4.5, 65, 3, 25, 100]
  return <Bar styles={style} data={data} category={['一月','二月','三月','四月','五月',]}  />;
}
export default Home 