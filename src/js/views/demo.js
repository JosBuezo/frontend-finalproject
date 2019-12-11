import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container className="logIn">
			<h2>Sign Up</h2>
			<Form className="form">
				<Col>
					<FormGroup>
						<Label>Email</Label>
						<Input type="email" name="email" id="exampleEmail" placeholder="myemail@email.com" />
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input type="password" name="password" id="examplePassword" placeholder="********" />
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label for="examplePassword">Confirm Password</Label>
						<Input type="password" name="password" id="examplePassword" placeholder="********" />
					</FormGroup>
				</Col>
				<Button>Submit</Button>
			</Form>
		</Container>
	);
};
