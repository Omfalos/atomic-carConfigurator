import { createStore, applyMiddleware, compose  } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from './sagas'
import {rootReducer} from "./reducers";

const sagaMiddleware = createSagaMiddleware()
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
