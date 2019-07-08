import React from "react";
import "./ProjectEulerProblem.css";

import {Form, Button} from "react-bootstrap";

class ProjectEulerProblem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
		}
	}
	k
	handleRunTest = event => {
		event.preventDefault();
		console.log(this.state.input);
	}

	handleInputChange = event => {
		// event.preventDefault();

		this.setState({
			input: event.target.value,
		});
	}


	render() {
		return (
			<div className="container">
				<h1> Welcome to problem </h1>
				<Form className="pe-problem input-form">
					<Form.Group>
						<Form.Label> Input </Form.Label>
						<Form.Control
							as="textarea"
							rows="5"
							onChange={this.handleInputChange}
						/>
					</Form.Group>
					<Button type="submit" onClick={this.handleRunTest.bind(this)}>Run</Button>
				</Form>
			</div>
		)
	};
}

export default ProjectEulerProblem;
