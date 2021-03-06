// user用のReducer
// Actionの種類によってStore内のStateを更新する

const stateObj = {
	user: {
		id: null,
		name: null,
		age: null
	},
	fetching: false,
	fetched: false,
	error: null
};

export default function reducer(state = stateObj, action) {
	switch (action.type) {
		case 'FETCH_USER': {
			return { ...state, fetching: true };
		}
		case 'FETCH_USER_REJECTED': {
			return { ...state, fetching: false, error: action.payload };
		}
		case 'FETCH_USER_FULFILLED': {
			return { ...state, fetching: false, fetch: true, user: action.payload };
		}
		case 'SET_USER_NAME': {
			return { ...state, user: { ...state.user, name: action.payload }};
		}
		case 'SET_USER_AGE': {
			return { ...state, user: { ...state.user, age: action.payload }};
		}
		default: {
			// nothing to do.
			break;
		}
	}

	return state;
}