import { combineReducers } from 'redux';

import tweetReducer from './tweetReducers';
import userReducer from './userReducers';

// reducerはStore内にあるStateを更新するメソッド
// combineReducersを使用することで、tweet用のReducerとuser用のReducerを統合している

export default combineReducers({
	tweetReducer,
	userReducer
});