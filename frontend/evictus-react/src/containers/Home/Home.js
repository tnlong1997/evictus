import React from 'react';
import './Home.css';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
		}
	}

	render() {
		return (
			<div>
				<h1> Welcome to Evictus ! </h1>
			</div>
		);
	}
}

export default Home;
