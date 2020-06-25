import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from "../_reducers"
import { createLogger } from 'redux-logger';

const initialState = {};
const loggerMiddleware = createLogger();

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(loggerMiddleware, thunkMiddleware), ReactReduxDevTools)
)