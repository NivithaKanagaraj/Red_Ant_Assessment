import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader";
import db from "../../firebase";
import {
	Container,
	Row,
	Col,
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
} from "reactstrap";
import "./styles.css";

function Admin() {
	const [gatelog, setGatelog] = useState([]);

	useEffect(() => {
		db.collection("gatelog").onSnapshot(
			(snapshot) => {
				setGatelog(snapshot.docs.map((doc) => doc.data()));
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);

	return (
		<div className="background">
			<AdminHeader />
			<div className="cards">
				{gatelog.map((person) => (
					<Container fluid>
						<Row>
							<Col sm="10">
								<Card
									style={{
										borderColor: "#333",
									}}
								>
									<CardBody>
										<CardTitle>{person.name}</CardTitle>
										<CardSubtitle>
											{person.date}
										</CardSubtitle>
										<CardText>{person.person}</CardText>
									</CardBody>
									<CardBody>
										<CardTitle>{person.reason}</CardTitle>

										<CardText>
											{person.entrytime}-{person.exittime}
										</CardText>
									</CardBody>
								</Card>
								<br />
							</Col>
						</Row>
					</Container>
				))}
			</div>
		</div>
	);
}

export default Admin;
