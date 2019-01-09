import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routers';
import {Provider} from 'react-redux';
import './assets/css/base.css'
import './assets/css/index.css';
import './assets/css/info.css';
import './assets/css/m.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store/configureStore';
const store= configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
