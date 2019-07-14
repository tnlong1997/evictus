import React from "react";
import "./ProjectEulerProblem.css";

import {Form, Button, ButtonToolbar, Spinner} from "react-bootstrap";

import {API} from "aws-amplify";

import NoTextBeatLoaderButton
	from "../../components/NoTextBeatLoaderButton/NoTextBeatLoaderButton";
import LoaderButton from "../../components/LoaderButton/LoaderButton";

class ProjectEulerProblem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
			output: "",
			isRunning: false,
		}
	}

	runTest(input) {
		return API.post(
			"interactive-test",
			`/problem/${this.props.match.params.id}/run`,
			{
				body: {
					input: input,
				}
			}
		);
	}

	handleRunTest = async event => {
		event.preventDefault();

		this.setState({
			isRunning: true,
		});

		try {
			let response = await this.runTest(this.state.input);
			this.setState({output: response.output});
			console.log(response.output);
		} catch (err) {
			console.log(err.message);
		}

		this.setState({
			isRunning: false,
		});
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
					<NoTextBeatLoaderButton
					  block
					  bsSize="large"
					  // disabled={!this.validateForm()}
					  type="submit"
					  isLoading={this.state.isRunning}
					  text="Execute"
					  onClick={this.handleRunTest.bind(this)}
					/>
				</Form>
				<h3> Output </h3>
				<text>{this.state.output}</text>
			</div>
		)
	};
}

export default ProjectEulerProblem;
