import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Context } from "../store/appContext";

const SignUp = props => {
	return (
		<div>
			<InputGroup>
				<InputGroupAddon addonType="prepend">
					<InputGroupText>@</InputGroupText>
				</InputGroupAddon>
				<Input placeholder="username" />
			</InputGroup>
			<br />
			<InputGroup>
				<InputGroupAddon addonType="prepend">
					<InputGroupText>Email</InputGroupText>
				</InputGroupAddon>
				<Input placeholder="example@email.com" />
			</InputGroup>
			<br />
			<InputGroup>
				<InputGroupAddon addonType="prepend">
					<InputGroupText>Password</InputGroupText>
				</InputGroupAddon>
				<Input placeholder="**********" />
			</InputGroup>
			<br />
			<InputGroup>
				<InputGroupAddon addonType="prepend">
					<InputGroupText>Confirm Password</InputGroupText>
				</InputGroupAddon>
				<Input placeholder="**********" />
			</InputGroup>
			<br />
		</div>
	);
};

export default SignUp;
