import React from 'react';
import './App.css';

import Routes from "./Routes";
import ExtendedNavBar from "./components/ExtendedNavBar/ExtendedNavBar";

import {withRouter} from "react-router-dom";
// import {LinkContainer} from "react-router-bootstrap";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			isAuthenticated: false,
			routesProps: {
				searchQuery: "",
			}
		}
	}

	updateSearchQuery = (searchQuery) => {
		this.setState({
			routesProps: {
				searchQuery: searchQuery
			}
		});
	}

	render() {
		let routesProps = this.state.routesProps;
		return (
			<div className="App">
				<ExtendedNavBar updateSearchQuery={this.updateSearchQuery} />
				<Routes routesProps={routesProps}/>
			</div>
		);
	}
}

export default withRouter(App);
