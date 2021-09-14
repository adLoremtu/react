import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TaskComplete, TaskDelete, TaskAdd, TaskIncomplete } from './actions/actions';
import './App.scss';

function App() {
	const lists = useSelector((state) => state.lists);
	const dispatch = useDispatch();

	const [text, setText] = useState('');
	const [complete, setComplete] = useState(false);
	
	const taskComplete = (id) => {
		dispatch(TaskComplete(id));
	};

	const taskDelete = (id) => {
		dispatch(TaskDelete(id));
	};

	const inputText = (e) => {
		setText(e.target.value);
	};

	const taskAdd = () => {
		if (!text) return;

		setComplete(false);
		dispatch(TaskAdd(text, complete));

		setText('');
	};

	const taskUncomplete = (id) => {
		dispatch(TaskIncomplete(id));
	};

	const unfinishedList = lists
		.filter((list) => !list.complete)
		.map((list) => (
			<li key={ list.id } className="App__todoItem">
				<span>{ list.text }</span>
				<button onClick={ taskComplete.bind(this, list.id) }>完了</button>
				<button onClick={ taskDelete.bind(this, list.id) }>削除</button>
			</li>
		));

	const finishedList = lists
		.filter((list) => list.complete)
		.map((list) => (
			<li key={ list.idx } className="App__todoItem">
				<span>{ list.text }</span>
				<button onClick={ taskUncomplete.bind(this, list.id) }>戻す</button>
			</li>
		));


	return (
		<div className="App">
			<div className="App__header contents">
				<h1>Todoアプリ ver0.0.0</h1>
			</div>
			<div className="App__add contents">
				<input type="text" value={ text } data-input onChange={ inputText } />
				<button className="btn btn--orange" onClick={ taskAdd }>追加</button>
			</div>
			<div className="App__todo contents">
				<ul className="App__list">
					<li className="App__item">
						<h2 className="App__subTitle">未完了</h2>
						<ul className="App__todoList">
							{ unfinishedList }
						</ul>
					</li>
					<li className="App__item">
						<h2 className="App__subTitle">完了</h2>
						<ul className="App__todoList">
							{ finishedList }
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
