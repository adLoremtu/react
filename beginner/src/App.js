import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Archive from './pages/archive';
import Feature from './pages/feature';
import Setting from './pages/setting';
import Rooter from './components/rooter';

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
				<Router>
					<Rooter />
					<Route path='/archive' component={Archive} />
					<Route path='/feature' component={Feature} />
					<Route path='/setting' render={ () => <Setting name={'Tom'}/> } />
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
