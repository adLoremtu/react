import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const lists = useSelector((state) => state.lists);

	return (
		<div className="App">
			<h1>Todoアプリ ver0.0.0</h1>
			<ul>
				{lists.map((list, idx) => (
					<li key={ list.idx } >{ list.text }</li>
				))}
			</ul>
		</div>
	);
}

export default App;
