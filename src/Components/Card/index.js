import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function CardDisplay(name, date, entrytime, exittime, reason, person) {
	return (
		<div>
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
		</div>
	);
}

export default CardDisplay;
