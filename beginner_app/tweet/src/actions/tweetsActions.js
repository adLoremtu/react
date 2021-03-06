import axios from 'axios';

// actionはUserからの操作によってStoreに送信するイベントオブジェクト
// fetchUser(), setUserName(name), setUserAge(age)はそれぞれActionCreatorとなる
// returnは配下に書かれているものがそれぞれActionに該当する
// return内にはStore内のStateをどのように変更したいかが明記されている。

export function fetchTweets() {
	return function(dispatch) {
		dispatch({ type: 'FETCH_TWEETS' });

		axios.get('http://localhost:18080')
			.then((res) => {
				dispatch({ type: 'FETCH_TWEETS_FULFILLED', payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: 'FETCH_TWEETS_REJECTED', payload: err});
			});
	};
}

export function addTweet(id, text) {
	return {
		type: 'ADD_TWEET',
		payload: {
			id,
			text
		}
	};
}

export function updateTweet(id, text) {
	return {
		type: 'UPDATE_TWEET',
		payload: {
			id,
			text
		}
	};
}

export function deleteTweet(id) {
	return {
		type: 'DELETE_TWEET',
		payload: id
	};
}