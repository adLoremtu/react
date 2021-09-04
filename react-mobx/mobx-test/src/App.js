import React from 'react';
import { observer } from 'mobx-react';

import './App.css';

@observer
class App extends React.Component {
	filter(e) {
		this.props.store.filter = e.target.value;
	}

	createNew(e) {
		// returnキーを押したら
		if (e.which === 13) {
			this.props.store.createTodo(e.target.value);
			e.target.value = '';
		}
	}

	toggleChange(todo) {
		console.log(todo);
		console.log(todo.complete);
		todo.complete = !todo.complete;
		console.log(todo.complete);
	}

	render() {
		const { filter, filteredTodos, clearComplete, todos } = this.props.store;
    
		const todoList = filteredTodos.map((todo) => (
			<li key={ todo.id }>
				<input type="checkbox" value={ todo.complete } checked={ todo.complete } onChange={ this.toggleChange.bind(this, todo) } />
				{ todo.value }
			</li>
		));
		return (
			<div className="App">
				<h1>Hello Mobx!</h1>
				<div>
					<span>検索：</span>
					<input className="filter" value={ filter } onChange={ this.filter.bind(this) } />
				</div>
				<div>
					<span>追加：</span>
					<input className="create" onKeyPress={ this.createNew.bind(this) } />
				</div>
				<ul>{ todoList }</ul>
				<a href="#" onClick={ clearComplete }>Clear Complete</a>
			</div>
		);
	}
}

export default App;
