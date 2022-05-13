import { useState, } from 'react';

export default function useLocalStorage(key: any) {
  const [localStorage] = useState(window.localStorage.getItem(key))

  const setLocalStorage = (params: any) => {
    window.localStorage.setItem(key, JSON.stringify(params))
  }
  return [localStorage, setLocalStorage]
}