import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { TaskComplete, TaskDelete } from './actions/actions';

function App() {
	const lists = useSelector((state) => state.lists);
	const dispatch = useDispatch();
	
	const taskComplete = (id) => {
		dispatch(TaskComplete(id));
	};

	const taskDelete = ((id) => {
		dispatch(TaskDelete(id));
	});

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
