import React from "react";
import "./ProjectEulerSearch.css";
// import {parse} from "../../libs/query-parser";

import {Table, Form, FormControl, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class ProjectEulerSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		// console.log(parse(this.props.location.search)["q"]);
		console.log(this.props.searchQuery);
	}

	// handleRowClick = (id, event) => {
	// 	event.preventDefault()
    //
	// }

	renderSearchResult = (searchResult) => {
		let problemUrl = "/projecteuler/" + searchResult.id + "/problem"
		return (
			<tr
				key={searchResult.id}
				// onClick={this.handleRowClick.bind(this, searchResult.id)}
			>
				<td>{searchResult.id}</td>
				{/* <td>{searchResult.statement}</td> */}
				<td>
					<Link to={problemUrl}>{searchResult.statement}</Link>
				</td>
				<td>{searchResult.status}</td>
				<td>{searchResult.lastUpdated}</td>
			</tr>
		)
	}

	render() {
		let mockResults = [
			{
				id: "1",
				statement: "Hello World 1",
				status: "Solved",
				lastUpdated: "Last Week",
			},
			{
				id: "2",
				statement: "Hello World 1",
				status: "Solved",
				lastUpdated: "Last Week",
			},
			{
				id: "3",
				statement: "Hello World 1",
				status: "Solved",
				lastUpdated: "Last Week",
			}
		]
		return (
			<div className="project-euler-problem">
				<h1> SEARCH RESULT </h1>
				<h5> Results for "X" </h5>
				{/* <Form inline onSubmit={e => this.handleSubmit(e)}>
    				<FormControl
						type="text"
						placeholder={this.props.searchQuery}
						className=" mr-sm-2"
					/>
    				<Button type="submit">Search</Button>
  				</Form> */}
				<Table striped hover bordered>
					<thead>
						<tr>
							<th> # </th>
							<th> Problem Statement </th>
							<th> Status </th>
							<th> Last Updated </th>
						</tr>
					</thead>
					<tbody>
						{mockResults.map(this.renderSearchResult)}
					</tbody>
				</Table>
			</div>
		)
	}
}

export default ProjectEulerSearch;
