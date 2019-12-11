import React, { Component, useState, useEffect, useContext } from "react";
import {
	Container,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Redirect,
	FormFeedback
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Single extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.user = React.createRef();
		this.password = React.createRef();
	}
	validateForm() {
		return this.state.user.length > 0 && this.state.password.length > 0;
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.session.isLoggedIn === true) {
							return <Redirect to="/userprofile/" />;
						} else {
							return (
								<div className="signup-page">
									<div className="signup-body mx-auto">
										<Form className="loginform">
											<FormGroup>
												<InputGroup>
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="fas fa-envelope" />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														id="form5"
														type="text"
														name="username"
														ref={this.user}
														placeholder="Username"
														onChange={e => this.handleChange(e)}
													/>
												</InputGroup>
												<FormFeedback>You will not be able to see this</FormFeedback>
											</FormGroup>
											<FormGroup>
												<InputGroup>
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="fas fa-lock" />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														id="form6"
														type="password"
														name="password"
														placeholder="Password"
														ref={this.password}
														onChange={e => this.handleChange(e)}
													/>
												</InputGroup>
												<FormFeedback>You will not be able to see this</FormFeedback>
											</FormGroup>
										</Form>
										<Button
											className="signupbutton mx-auto"
											onClick={() => {
												this.setState({
													session: actions.login(this.state.username, this.state.password)
												});
											}}>
											Log In
										</Button>
										<div className="accountalready">
											<p>
												{"Don't have an Account?"}{" "}
												<Link
													className="signuptologin"
													to={"/demo"}
													style={{ textDecoration: "none" }}>
													Sign-Up Here.
												</Link>
											</p>
										</div>
									</div>
								</div>
							);
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}
