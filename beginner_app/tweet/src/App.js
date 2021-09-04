import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { fetchTweets } from './actions/tweetsActions';
import './App.css';

// reactとredux-storeを接続する
// これはpropsとしてstoreの値を取得する
// stateのkeyを指定することでthis.propsからstateの値を取得することが可能
@connect((store) => {
	return {
		user: store.userReducer.user,
		userFetched: store.userReducer.fetched,
		tweets: store.tweetReducer.tweets,
		tweetsFetching: store.tweetReducer.fetching
	};
})
class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchUser());
	}
	fetchTweets() {
		this.props.dispatch(fetchTweets());
	}
	render() {
		const { user, tweets, tweetsFetching } = this.props;
		if (tweetsFetching) {
			return <div>fetching...</div>;
		}
		if (!tweets.length) {
			return <button onClick={this.fetchTweets.bind(this)}>ツイートをロードする</button>;
		}

		const mappedTweets = tweets.map((tweet) => <li key={tweet.id}>{ tweet.text }</li>);

		return (
			<div className="App">
				<h1>{ this.props.user.name }</h1>
				<ul>{ mappedTweets }</ul>
			</div>
		);
	}
}

export default App;
