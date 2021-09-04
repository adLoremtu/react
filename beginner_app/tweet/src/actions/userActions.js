// actionはUserからの操作によってStoreに送信するイベントオブジェクト
// fetchUser(), setUserName(name), setUserAge(age)はそれぞれActionCreatorとなる
// returnは配下に書かれているものがそれぞれActionに該当する
// return内にはStore内のStateをどのように変更したいかが明記されている。

export function fetchUser() {
	return {
		type: 'FETCH_USER_FULFILLED',
		payload: {
			id: 0,
			name: 'will',
			age: 35
		}
	};
}

export function setUserName(name) {
	return {
		type: 'SET_USER_NAME',
		payload: name
	};
}

export function setUserAge(age) {
	return {
		type: 'SET_USER_AGE',
		payload: age
	};
}