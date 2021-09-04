import { applyMiddleware, createStore } from 'redux';

// action前後のログ出力が可能
import { createLogger } from 'redux-logger';
// 非同期処理を行うmiddleware
import thunk from 'redux-thunk';
// 非同期処理を行うmiddleware
import { createPromise } from 'redux-promise-middleware';

import reducer from '../reducers/reducer';

// === Store.jsは、Stateを管理している場所 ===

const promise = createPromise({ types: { fulfilled: 'success' }});
const middleware = applyMiddleware(promise, thunk, createLogger());

export default createStore(reducer, middleware);