import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Main() {
	return (
		<div>
			<Link to="/new">
				<Button>New Entry</Button>
			</Link>
		</div>
	);
}

export default Main;
