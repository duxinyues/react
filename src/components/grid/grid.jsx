import React,{useEffect} from "react";
import "./grid.scss";

export default function Grid() {
useEffect(()=>{
  document.title = "Grid网格布局"
},[])
  return <div>
    <h1>Grid网格布局</h1>
    <div className="grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
}