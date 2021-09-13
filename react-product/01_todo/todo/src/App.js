import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TaskComplete, TaskDelete, TaskAdd } from './actions/actions';

function App() {
	const lists = useSelector((state) => state.lists);
	const dispatch = useDispatch();

	const [text, setText] = useState('');
	const [complete, setComplete] = useState(false);
	
	const taskComplete = (id) => {
		dispatch(TaskComplete(id));
	};

	const taskDelete = ((id) => {
		dispatch(TaskDelete(id));
	});

	const inputText = ((e) => {
		setText(e.target.value);
	});

	const taskAdd = () => {
		if (!text) return;

		setComplete(false);

		dispatch(TaskAdd(text, complete));
	};

	const unfinishedList = lists
		.filter((list) => !list.complete)
		.map((list) => (
			<li key={ list.id }>
				<span>{ list.text }</span>
				<button onClick={ taskComplete.bind(this, list.id) }>完了</button>
				<button onClick={ taskDelete.bind(this, list.id) }>削除</button>
			</li>
		));

	const finishedList = lists
		.filter((list) => list.complete)
		.map((list) => (
			<li key={ list.idx }>{ list.text }</li>
		));


	return (
		<div className="App">
			<h1>Todoアプリ ver0.0.0</h1>
			<input type="text" value={ text } onChange={ inputText } />
			<button onClick={ taskAdd }>追加</button>
			<h2>未完了</h2>
			<ul>
				{ unfinishedList }
			</ul>
			<h2>完了</h2>
			<ul>
				{ finishedList }
			</ul>
		</div>
	);
}

export default App;
