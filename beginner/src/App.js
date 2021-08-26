import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
	constructor() {
		super();
		this.state = {title: 'welcome'};
	}

	changeTitle = (title) => {
		this.setState({title});
	}

	render() {
		return (
			<div className="app">
				<Header changeTitle={this.changeTitle} title={this.state.title} />
				<Footer />
			</div>
		);
	}
}

export default App;
