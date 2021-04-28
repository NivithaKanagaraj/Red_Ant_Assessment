import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const adminLogin = () => {
		if (username === "admin" && password === "admin") {
			alert("Successful Login");
			localStorage.setItem("user", username);
			history.push(`/admin`);
		}
	};

	return (
		<div>
			<Form>
				<Form.Group controlId="formGroupName">
					<Form.Label>Username</Form.Label>
					<Form.Control
						value={username}
						type="name"
						onChange={(e) => setUsername(e.target.value)}
						required
						placeholder="Enter username"
					/>
				</Form.Group>
				<Form.Group controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						value={password}
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit" onClick={adminLogin}>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default Login;
