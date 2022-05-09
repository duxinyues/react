import React, { useEffect } from "react";
import "./grid.scss";
import gridData from "./data.json";
import { Button } from "antd"
import { StarFilled } from '@ant-design/icons';
import { useFetch } from "../../../hooks/useFetch"
import moment from "moment"
const formatDate = (date: Date) => {
  return moment(date).format('YYYY-MM-DD')
}
export default function Grid() {
  useEffect(() => {
    document.title = "Grid网格布局";
    fetch("../data.json").then(res => res.json()).then(res => {
      console.log("====", res)
    })
  }, [])

  const { data, doFetch } = useFetch(
    ({ url }) => new Promise(resolve => {
      fetch(url).then(res => resolve(res))
    }),
    {
      url: "../data.json",
    },
    'initNotRun'
  )
  return <div>
    <h1>Grid网格布局</h1>
    <div className="grid">
      {gridData.map((item: any, index) => <div className='item' key={index}>
        <div className='head'><img src="https://www.lvbad.com/uploads/allimg/2003/0T6343307-8.jpg" alt="封面" /></div>
        <div className='info'>
          <div className='prjName'>{item.prjName}</div>
          <div className='prjManager'>项目经理：{item.prjManager}</div>
          <div className='prjStartDate'>立项日期：{formatDate(new Date(item.prjStartDate))}</div>
          <div>任务：{item.taskCount} 完成：{item.taskDoneCount} 进行：{item.taskDoingCount}</div>
        </div>
        <div className='option'>
          <div className='status'><span className={`${item.projectStatus} point`} /> {item.projectStatus === 'approving' ? '审批中' : '进行中'}</div>
          <div className='star'><StarFilled /></div>
        </div>
      </div>)}
    </div>
    <h2>隐式网格布局</h2>
    <div className="grid1">
      {gridData.map((item: any) => <div className='item'>
        <div className='head'><img src="https://www.lvbad.com/uploads/allimg/2003/0T6343307-8.jpg" alt="封面" /></div>
        <div className='info'>
          <div className='prjName'>{item.prjName}</div>
          <div className='prjManager'>项目经理：{item.prjManager}</div>
          <div className='prjStartDate'>立项日期：{formatDate(new Date(item.prjStartDate))}</div>
          <div>任务：{item.taskCount} 完成：{item.taskDoneCount} 进行：{item.taskDoingCount}</div>
        </div>
        <div className='option'>
          <div className='status'><span className={`${item.projectStatus} point`} /> {item.projectStatus === 'approving' ? '审批中' : '进行中'}</div>
          <div className='star'><StarFilled /></div>
        </div>
      </div>)}
    </div>
  </div>
}