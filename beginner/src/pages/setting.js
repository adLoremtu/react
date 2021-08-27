import React from 'react';

class setting extends React.Component {
	render() {
		return (
			<div>
				<h1>setting</h1>
				<h2>I am { this.props.name }</h2>
			</div>
		);
	}
}

export default setting;