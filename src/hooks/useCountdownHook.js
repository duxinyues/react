import { useState, useEffect, useRef } from 'react';

export default function useCountdownHook(initCount = 1) {
  const [count, setCount] = useState(initCount);
  const reftimeId = useRef(null);
  const start = () => {
    let newCount = initCount;
    reftimeId.current = setInterval(() => {
      newCount--;
      setCount(newCount)
    }, 1000)
  }

  useEffect(() => {
    if (count === 0) {
      clearInterval(reftimeId.current)
    }
  }, [count])

  useEffect(() => {
    return () => {
      clearInterval(reftimeId.current);
    }
  }, [])
  
  return {
    count,
    start
  }
}