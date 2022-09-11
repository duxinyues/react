/*
 * @Author: 韦永愿 1638877065@qq.com
 * @Date: 2022-08-12 08:49:42
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-11 21:06:34
 * @FilePath: \react\src\index.tsx
 * @Description: 
 * Copyright (c) 2022 by 韦永愿 email: 1638877065@qq.com, All Rights Reserved.
 */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store";
const { PersistGate } = require('redux-persist/integration/react')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
