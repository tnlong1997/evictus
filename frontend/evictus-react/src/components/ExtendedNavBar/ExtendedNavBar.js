import React from "react";
import "./ExtendedNavBar.css";

import {Navbar, Form, FormControl} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";

class ExtendedNavBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			searchQuery: "",
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		this.props.updateSearchQuery(this.state.searchQuery);

		let searchParameters = 'sortBy=default&sortOrder=asc&q=' + this.state.searchQuery;

		this.props.history.push('/projecteuler/search?' + searchParameters);
	}

	handleQueryChange = event => {
	    this.setState({
	      searchQuery: event.target.value,
	    });
  	}

	render() {
		return(
			<Navbar bg="dark" expand="lg">
				<Navbar.Brand className="nav-brand">
					<Link to="/" className="text-link">
						EVICTUS
					</Link>
				</Navbar.Brand>
				<Form inline onSubmit={e => this.handleSubmit(e)}>
    				<FormControl
						type="text"
						placeholder="Enter problem number"
						className=" mr-sm-2"
						onChange={this.handleQueryChange}
						name="searchQuery"
					/>
    				{/* <Button type="submit">Submit</Button> */}
  				</Form>
				<Navbar.Toggle />
			</Navbar>
		);
	}
}

export default withRouter(ExtendedNavBar);
