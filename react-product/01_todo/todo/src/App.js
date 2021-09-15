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
				<span className="App__todoText mr-10">{ list.text }</span>
				<button className="btn btn-flat btn-flat--sky mr-10" onClick={ taskComplete.bind(this, list.id) }>
					<span className="btn__txt">完了</span>
				</button>
				<button className="btn btn-flat btn-flat--indianred" onClick={ taskDelete.bind(this, list.id) }>
					<span className="btn__txt">削除</span>
				</button>
			</li>
		));

	const finishedList = lists
		.filter((list) => list.complete)
		.map((list) => (
			<li key={ list.idx } className="App__todoItem">
				<span className="App__todoText mr-10">{ list.text }</span>
				<button className="btn btn-flat btn-flat--forest"  onClick={ taskUncomplete.bind(this, list.id) }>
					<span className="btn__txt">戻す</span>
				</button>
			</li>
		));


	return (
		<div className="App dark">
			<div className="App__header contents">
				<h1 className="App__title">Todoアプリ ver0.0.1</h1>
			</div>
			<div className="App__add contents">
				<input type="text" className="mr-20" value={ text } data-input onChange={ inputText } />
				<button className="btn btn-flat btn-flat--lemonchiffon" onClick={ taskAdd }>
					<span className="btn__txt">追加</span>
				</button>
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
