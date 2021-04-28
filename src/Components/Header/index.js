import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Link to="/">
					<Navbar.Brand href="/">Log</Navbar.Brand>
				</Link>
				<Nav className="mr-auto">
					<Link to="/login">
						<Navbar.Brand href="/login">Admin</Navbar.Brand>
					</Link>
				</Nav>
			</Navbar>
		</div>
	);
}

export default Header;
