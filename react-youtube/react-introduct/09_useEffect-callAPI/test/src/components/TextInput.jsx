import { useState } from 'react';

const TextInput = () => {
	const [ name, setName ] = useState('');

	const handleName = (e) => {
		console.log(e.target.value);
		setName(e.target.value);
	};

	return (
		<input 
			onChange={(e) => handleName(e)}
			type="text"
			value={name}
		/>
	);
};

export default TextInput;