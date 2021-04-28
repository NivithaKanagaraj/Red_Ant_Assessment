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
import CardDisplay from "../Card";

function Admin() {
	const [gatelog, setGatelog] = useState([]);

	const fetchLogs = async () => {
		const response = db.collection("gatelog");
		const data = await response.get();
		data.docs.forEach((item) => {
			setGatelog([...gatelog, item.data()]);
		});
	};

	useEffect(() => {
		fetchLogs();
	}, []);

	const peopleCards = () => {
		gatelog.map((person) => {
			return (
				<Col sm="4">
					<CardDisplay
						name={person.name}
						date={person.date}
						entrytime={person.entrytime}
						exittime={person.exittime}
						reason={person.reason}
						person={person.person}
					/>
				</Col>
			);
		});
	};

	return (
		<div>
			<AdminHeader />

			{gatelog.map(
				({ name, date, entrytime, exittime, person, reason }) => (
					<Container fluid>
						<Row>
							<Col sm="2">
								<Card>
									<CardBody>
										<CardTitle>{name}</CardTitle>
										<CardSubtitle>{date}</CardSubtitle>
										<CardText>{person}</CardText>
									</CardBody>
									<CardBody>
										<CardTitle>{reason}</CardTitle>

										<CardText>
											{entrytime}-{exittime}
										</CardText>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				)
			)}
		</div>
	);
}

export default Admin;
