import { useState, useEffect, useCallback } from "react";

type Tfetch = (...rest: any[]) => any; // 函数接受任意参数的时候，用rest传成any[]类型


interface IfnParams {
  current?: number;
  pageSize?: number;
  total?: number;
  [proName: string]: any;
}

interface Iconverter {
  (data: any): any;
}

type TuseFetch = (
  fetch: Tfetch, // 请求函数
  fetchParams?: IfnParams, // 请求函数的参数
  isInitRun?: boolean | 'initRun' | 'initNotRun', //// 初始化时，是否执行请求函数，接受Boolean、initRun、initNotRun
  converter?: Iconverter, // 转行函数
) => ({
  data: any; //
  doFetch: Tfetch;
  loading: boolean;
  params: IfnParams
});


const useFetch: TuseFetch = (
  fetch,
  fetchParams = {
    current: 1,
    pageSize: 8,
    total: 10
  },
  isInitRun = true,
  converter = (data) => data
) => {
  const [params, setParams] = useState(() => ({ current: 1, pagesize: 8, ...fetchParams }));
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isGoRun, setIsGoRun] = useState(isInitRun);

  const memoryFetch = useCallback(fetch, []);
  const memoryconverter = useCallback(converter, []);
  // const memoryParams = useMemo(() => params, [params])
  // 这里注意：
  // 1. params是引用类型，不需要在 useEffect中缓存的，因为state本身就做了缓存
  // 2. 但是：如果是常量 aaaaa 是引用类型，在useEffect中就必须用useMemo做缓存，Object.is()永远是false,死循环
  // const aaaaa = {a: 1111}
  // useEffect(() => console.log(aaaaa), [aaaaa])
  useEffect(() => {
    if (typeof isGoRun === 'boolean' && !isGoRun || isGoRun === 'initNotRun') return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await memoryFetch(params);
        setLoading(false);

        if (res.data) {
          setData(() => memoryconverter(res.data));
        }
      } catch (error) {
        setLoading(false);
        console.log(error)
      }
    };

    fetchData();
  }, [memoryFetch, params, memoryconverter, isInitRun, isGoRun]);

  // 重新发起请求
  const doFetch = (fetchParams: IfnParams): void => {
    setIsGoRun(true);
    setParams((prevState) => ({ ...prevState, ...fetchParams }))
  }

  return {data,doFetch,loading,params}
}


export { useFetch }