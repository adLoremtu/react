import './App.css';
import { Article, Test } from './components';

function App() {
	return (
		<div className="App">
			<Article 
				title="title"
				content="content"
			/>
			<Test />
		</div>
	);
}

export default App;
