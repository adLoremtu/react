import React from 'react';

class todo extends React.Component {
	render() {
		return (
			<li data-id={this.props.id}>
				<span>{this.props.text}</span>
				<span>{this.props.complete ? '●' : '×'}</span>
			</li>
		);
	}
}

export default todo;