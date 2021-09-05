import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
	const [name, setName] = useState('');
	const [id, setId] = useState('adLoremtu');
	const ids = ['gaearon', 'aws', 'google', 'facebook'];

	const getRandomId = () => {
		const _id = ids[Math.floor(Math.random() * ids.length)];
		setId(_id);
	};


	useEffect(() => {
		axios.get(`https://api.github.com/users/${id}`)
			.then((res) => {
				console.log(res.data);
				setName(res.data.name);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<div className="App">
			<p>{id}の、Github上の名前は{name}です。</p>
			<button onClick={getRandomId}>IDを変更</button>
		</div>
	);
}

export default App;
