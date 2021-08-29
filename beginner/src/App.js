import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Archive from './pages/archive';
import Feature from './pages/feature';
import Setting from './pages/setting';
import Rooter from './components/rooter';
import Todo from './components/todo';
import TodoStore from './stores/store';
import TodoActions from './actions/actions';

class App extends React.Component {
	constructor() {
		super();
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			title: 'welcome',
			todos: TodoStore.getAll()
		};
	}

	changeTitle = (title) => {
		this.setState({title});
	}

	// 初期化処理（storeの状態が変化したら再取得）
	componentDidMount() {
		TodoStore.on('change', this.getTodos);
	}

	componentWillUnmount() {
		TodoStore.removeListener('change', TodoStore.listenerCount('change'));
	}

	createTodo() {
		TodoActions.createTodo('New Todo');
	}

	reloadTodo() {
		TodoActions.reloadTodos();
	}

	getTodos() {
		this.setState({
			todos: TodoStore.getAll()
		});
	}

	render() {
		const { todos } = this.state;

		const todoComponents = todos.map((todo) => {
			return <Todo key={todo.id} {...todo} />;
		});

		return (
			<div className="app">
				{/* step1 reactの基本 */}
				<section className="contents">
					<h2>Step1 Reactの基本</h2>
					<Header changeTitle={this.changeTitle} title={this.state.title} />
					<Footer />
				</section>

				{/* step2 react-router */}
				<section className="contents">
					<h2>Step2 react-router</h2>
					<Router>
						<Rooter />
						<Route path='/archive' component={Archive} />
						<Route path='/feature' component={Feature} />
						<Route path='/setting' render={ () => <Setting name={'Tom'}/> } />
					</Router>
				</section>

				{/* step3 flux */}
				<section className="contents">
					<h2>Step3 fluxについて</h2>
					<button onClick={ this.createTodo.bind(this) }>Create!</button>
					<button onClick={ this.reloadTodo.bind(this) }>Reload!</button>
					<ul>
						{ todoComponents }
					</ul>
				</section>
			</div>
		);
	}
}

export default App;
