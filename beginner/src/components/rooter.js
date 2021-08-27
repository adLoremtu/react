import React from 'react';
import { Link } from 'react-router-dom';

class rooter extends React.Component {
	render() {
		return (
			<div>
				<Link to="/archive"><button className="btn btn-danger">archive</button></Link>
				<Link to="/feature"><button className="btn btn-danger">feature</button></Link>
				<Link to="/setting"><button className="btn btn-danger">setting</button></Link>
			</div>
		);
	}
}

export default rooter;