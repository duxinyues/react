import {legacy_createStore as createStore,combineReducers,applyMiddleware,compose}  from 'redux';
import thunk from 'redux-thunk';


const reducers = combineReducers({});

const  middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middleware)
))


export default store