/**
 * 複数のReducer
 * combineReducersでまとめる
 */
/*
import { combineReducers, createStore } from 'redux';

// user Object
const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			state = { ...state, name: action.payload };
			break;
		case 'CHANGE_AGE':
			state = { ...state, age: action.payload };
			break;
		default:
			// nothing to do.
	}
	return state;
};

// tweets Array
const tweetsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TWEET':
			state = state.concat({ id: Date.now(), text: action.payload });
			break;
		default: 
			// nothing to do.
	}
	return state;
};

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
	console.log('store changed', store.getState());
});

store.dispatch({ type: 'FOO', payload: 'BAR' });
store.dispatch({ type: 'CHANGE_NAME', payload: 'HOGE' });
store.dispatch({ type: 'CHANGE_AGE', payload: 73 });
store.dispatch({ type: 'CHANGE_AGE', payload: 38 });
store.dispatch({ type: 'ADD_TWEET', payload: 'OMG LIKE LOL' });
store.dispatch({ type: 'ADD_TWEET', payload: 'I am so happy' });
*/

/**
 * middleware（複数登録も可能）
 */
/*
import { applyMiddleware, createStore } from 'redux';

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			state = state + 1;
			break;
		case 'DEC':
			state = state - 1;
			break;
		case 'ERR':
			throw new Error('Error!!');
		default:
			// nothing to do.
	}

	return state;
};

// ログ出力
const logger = (store) => (next) => (action) => {
	console.log('action fired', action);
	next(action);
};

// エラー出力
const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch (e) {
		console.log('Error was occured', e);
	}
};

const middleWare = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleWare);

store.subscribe(() => {
	console.log('store changed', store.getState());
});

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });
store.dispatch({ type: 'DEC' });
store.dispatch({ type: 'ERR' });
*/

/**
 * 非同期アプリケーション
 * redux-thunk: dispatcherに関数を渡せるようにする。Actionオブジェクトの代わりに関数を返す
 * axios: HTTP clientとして動作する。HTTPリクエストを捌くことができる
 * redux-promise: 非同期処理を行うmiddleware
 */
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// case 'FETCH_USERS_START':
		case 'FETCH_USERS_PENDING':
			return {...state, fetching: true};
		// case 'FETCH_USERS_ERROR':
		case 'FETCH_USERS_REJECTED':
			return {...state, fetching: false, error: action.payload};
		// case 'RECEIVE_USERS':
		case 'FETCH_USERS_FULFILLED':
			return {...state, fetching: false, fetched: true, users: action.payload};
		default:
			// nothing to do.
	}
	return state;
};

// const middleWare = applyMiddleware(thunk, createLogger());
const middleWare = applyMiddleware(promise, createLogger());

const store = createStore(reducer, middleWare);

/*
store.dispatch((dispatch) => {
	dispatch({ type: 'FETCH_USERS_START' });

	axios.get('http://localhost:18080').then((response) => {
		dispatch({ type: 'RECEIVE_USERS', payload: response.data });
	}).catch((err) => {
		dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
	});
});
*/
store.dispatch({
	type: 'FETCH_USERS',
	payload: axios.get('http://localhost:18080')
});