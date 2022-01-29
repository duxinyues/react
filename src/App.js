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
