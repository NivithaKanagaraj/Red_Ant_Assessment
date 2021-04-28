import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./styles.css";

function AdminHeader() {
	const history = useHistory();
	const adminLogout = () => {
		alert("Logged out successfully");
		localStorage.clear();
		history.push(`/login`);
	};
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Link to="/">
					<Navbar.Brand href="/">Log</Navbar.Brand>
				</Link>
				<Nav className="mr-auto"></Nav>
				<Navbar.Brand onClick={adminLogout} className="logout">
					Logout
				</Navbar.Brand>
			</Navbar>
		</div>
	);
}

export default AdminHeader;
