import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface IAny {
  [proName: string]: any,
}

interface Option {
  option: IAny, // 配置对象
  wrapStyle?: IAny, // 样式
  className?: string,
  theme?: string, // 主题
  events?: IAny,// 事件配置对象，回调有events和echarts实例,
  isResize?: boolean, //自适应窗口变化
  showLoading?: boolean,
  refresh?: boolean, // 是否刷新
}


// 高阶组件
const Echarts = ({
  option,
  wrapStyle = {
    width: '400px',
    height: '400px',
    backgroundColor: '#fff'
  },
  theme = 'vintage',
  showLoading = true,
  isResize = true,
  events,
  className,
  refresh = false
}: Option) => {

  const ref = useRef<HTMLDivElement | any>(null);
  let instance: echarts.ECharts;

  const getInstance = async () => {
    instance = await echarts.getInstanceByDom(ref.current) || await echarts.init(ref.current, theme);
    instance.clear(); // 清除实例
  }

  const setOption = async () => {
    showLoading && instance.showLoading('default');
    await new Promise((resolve) => {
      setTimeout(() => {
        instance && instance.setOption(option);
        resolve("");
      }, 1000)
    })

    showLoading && instance.hideLoading();
  }

  const binEvent = () => {
    if (instance && events) {
      for (let i in events) {
        instance.on(
          i,
          events[i].query,
          (e: any) => events[i].callback(e, instance)
        );
      }
    }
  }

  const init = async () => {
    await getInstance(); // 创建或者获取echart实例
    await setOption();
    await binEvent()
  }

  const resizeEcharts = () => {
    instance && instance.resize()
  }

  useEffect(() => {
    init()
  }, [refresh])

  useEffect(() => {
    if (isResize) {
      window.addEventListener('resize', resizeEcharts);
      return () => window.addEventListener('resize', resizeEcharts)
    }
  }, [])

  return (<div ref={ref} style={wrapStyle} className={className} />)
}


export default Echarts