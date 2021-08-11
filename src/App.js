/*
 * @Author: your name
 * @Date: 2021-07-10 15:03:42
 * @LastEditTime: 2021-08-09 23:50:48
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: In User Settings Edit
 * @FilePath: \react\src\App.js
 */
import React from "react";
import InputDome from "./components/input";
import EchratsStack from "./components/echarts_stack"
import "./App.css";
function App() {
  return <div className="container">
    <div>
      <InputDome />
    </div>
    <div>
      <EchratsStack />
    </div>
  </div>
}

export default App;
