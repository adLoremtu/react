import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';

class TodoStore extends EventEmitter {
	// todo task
	constructor() {
		super();
		this.todos = [
			{
				id: 1630201746880,
				text: 'Go Shopping',
				complete: false
			},
			{
				id: 1630201754769,
				text: 'Pay Bills',
				complete: false
			}
		];
	}

	// todoリスト作成
	createTodo(text) {
		const id = Date.now();

		this.todos.push({
			id,
			text,
			complete: false
		});

		this.emit('change');
	}

	// todoリスト最新版取得
	receiveTodos(todos) {
		this.todos = todos;
		this.emit('change');
	}

	// todoリスト取得
	getAll() {
		return this.todos;
	}

	// 全てのListenerから利用される
	handleActions(action) {
		switch (action.type) {
			case 'CREATE_TODO': 
				this.createTodo(action.text);
				break;
			case 'RECEIVE_TODOS':
				this.receiveTodos(action.todos);
				break;
			default:
				// nothing todo
				break;
		}
	}
}

const todoStore = new TodoStore();
Dispatcher.register(todoStore.handleActions.bind(todoStore));   // 新たにListenerを追加する

// 動作検証
window.dispatcher = Dispatcher;
export default todoStore;