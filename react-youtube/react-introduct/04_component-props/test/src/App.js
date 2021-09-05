import './App.css';
import Article from './components/Article';

function App() {
	return (
		<div className="App">
			<Article
				title='title test without {}'
				content='content test without {}'
			/>
			<Article
				title='no2'
				content='hoge'
			/>
			<Article
				title='no3'
				content='huga'
			/>
		</div>
	);
}

export default App;
