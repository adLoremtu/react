import { useState } from 'react';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	const countUp = () => {
		setCount((prevState) => prevState + 1);
	};

	const countDown = () => {
		setCount((prevState) => prevState - 1);
	};

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