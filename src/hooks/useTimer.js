import { useRef, useState } from "react"
export default function useTimers(step = 1) {
  const timer = useRef(null);
  const [num, setNum] = useState(0);
  const start = () => {
    console.log("开始")
    timer.current = setInterval(() => {
      setNum((num) => num + 1)
    }, step * 1000)

  }
  const clear = () => {
    setNum(0);
    clearInterval(timer.current)
  }
  return {
    num,
    start,
    clear
  }
}