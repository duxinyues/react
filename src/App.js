/*
 * @Author: your name
 * @Date: 2021-07-10 15:03:42
 * @LastEditTime: 2021-07-22 23:34:41
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: In User Settings Edit
 * @FilePath: \react\src\App.js
 */
import React, { useReducer } from "react"
import Counter from "./components/useReducer";
import { reducer } from "./reducer"
const initialState = { count: 0 };
const TodosDispatch = React.createContext(null);
function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return <TodosDispatch.Provider value={dispatch}>
    <Counter todos={todos} />
  </TodosDispatch.Provider>
}

export default App;
