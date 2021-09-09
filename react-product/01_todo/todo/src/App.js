import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const lists = useSelector((state) => state.lists);

	const unfinished = lists.filter((list) => !list.complete)
		.map((list, idx) => (
			<li key={ list.idx }>{ list.text }</li>
		));

	const finished = lists.filter((list) => list.complete)
		.map((list, idx) => (
			<li key={ list.idx }>{ list.text }</li>
		));

	return (
		<div className="App">
			<h1>Todoアプリ ver0.0.0</h1>
			<h2>未完了</h2>
			<ul>
				{ unfinished }
			</ul>
			<h2>完了</h2>
			<ul>
				{ finished }
			</ul>
		</div>
	);
}

export default App;
