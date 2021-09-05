import { useState, useEffect } from 'react';

const ToggleButton = () => {
	const [ open, setOpen ] = useState(false);

	const toggle = () => {
		setOpen((prevState) => !prevState);
	};

	useEffect(() => {
		console.log('Current state is', open);

		if (open) {
			console.log('Subscribe database ...');
		}

		// 再レンダリングが実行される前に必ずcleanup関数が実行される
		return () => {
			console.log('Unsubscribe database ...');
		};
	});

	return (
		<button onClick={toggle}>
			{open ? 'OPEN' : 'CLOSE'}
		</button>
	);
};

export default ToggleButton;