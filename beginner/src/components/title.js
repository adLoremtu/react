import React from 'react';

export default class title extends React.Component {
	render() {
		return (
			<h1>{ this.props.title }</h1>
		);
	}
}