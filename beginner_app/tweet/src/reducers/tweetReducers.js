// tweet用のReducer
// Actionの種類によってStateの状態を更新する

const stateObj = {
	tweets: [],
	fetching: false,
	fetched: false,
	error: null
};

export default function reducer(state = stateObj, action) {
	switch (action.type) {
		case 'FETCH_TWEETS': {
			return { ...state, fetching: true };
		}
		case 'FETCH_TWEETS_REJECTED': {
			return { ...state, fetching: false, error: action.payload };
		}
		case 'FETCH_TWEETS_FULFILLED': {
			return { ...state, fetching: false, fetched: true, tweets: action.payload };
		}
		case 'ADD_TWEET': {
			return { ...state, tweets: [...state.tweets, action.payload ]};
		}
		case 'UPDATE_TWEET': {
			const { id, text } = action.payload;
			const newTweets = [...state.tweets];
			const tweetToUpdate = newTweets.findIndex((tweet) => tweet.id === id);
			newTweets[tweetToUpdate] = action.payload;

			return { ...state, tweets: newTweets };
		}
		case 'DELETE_TWEET': {
			return { ...state, tweets: state.tweets.filter((tweet) => tweet.id !== action.payload )};
		}
		default: 
			// nothing to do.
			break;
	}

	return state;
}