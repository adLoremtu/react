import React from 'react';
import { computed, extendObservable } from 'mobx';

// nested observable
// それぞれのは言えrつの要素であるtweetに対してcheckedかどうかのstateとidを追加する
// それらの情報をまとめて管理するためにTodoクラスを生成
class Todo {
	constructor(value) {
		extendObservable(this, {
			value: value,
			id: Date.now(),
			complete: false
		});
	}
}

// observableとして宣言することでobserverの監視対象として設定することが可能
class TodoStore extends React.Component {
	constructor() {
		super();

		extendObservable(this, {
			todos: [],
			filter: ''
		});
	}

	// 検索
    @computed get filteredTodos() {
		const matchesFilter = new RegExp(this.filter, 'i');
		return this.todos.filter((todo) => !this.filter || matchesFilter.test(todo.value));
	}

    // 追加
    createTodo(val) {
    	this.todos.push(new Todo(val));
    }

    // 削除
    clearComplete = () => {
    	console.log('clicked');
    	const incompleteTodos = this.todos.filter((todo) => !todo.complete);
    	this.todos.replace(incompleteTodos);
    }
}

// classをexportする前にwebブラウザのコンソールでdebugを行うため、グローバル領域（window）にもこのクラスのインスタンスを保持するよう設定
const store = window.store = new TodoStore();

export default store;

// 実際に状態が遷移しているかどうか確認したい場合はautorun関数を実行すると良い。
// Stateが変更されたタイミングをトリガーにリアルタイム処理を走らせ、その中にconsole.log()を入れることで内容を出力させる
// autorun (() => {
// 	console.log(store.filter);
// 	console.log(store.todos[0]);
// });