import { useState, useEffect } from 'react';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	const countUp = () => {
		setCount((prevState) => prevState + 1);
	};

	const countDown = () => {
		setCount((prevState) => prevState - 1);
	};

	// 毎回実行: 第二引数未指定
	// 初回レンダリングのみ実行: 第二引数に[]指定
	// triggerが変更されるたび実行: 第二引数に[trigger]指定
	// trigger1, trigger2が変更されるたび実行: 第二引数に[trigger1, trigger2]指定
	useEffect(() => {
		console.log('current count is...', count);
	}, [count]);

	return (
		<div>
			<p>
                良いカウンター<br />
                現在のカウント数：{count}
			</p>
			<button onClick={countUp}>Up</button>
			<button onClick={countDown}>Down</button>
		</div>
	);
};

export default Counter;