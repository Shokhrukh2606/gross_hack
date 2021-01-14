import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store
if (process.env.NODE_ENV === 'development') {
   store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk,  loggerMiddleware)
  ));
} else {
  store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
}


export default store;
