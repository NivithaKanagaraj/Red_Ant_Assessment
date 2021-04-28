import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./styles.css";
import { useHistory } from "react-router-dom";
import db from "../../firebase";
import firebase from "firebase";

function AddEntry() {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [entry, setEntry] = useState("");
	const [exit, setExit] = useState("");
	const [reason, setReason] = useState("");
	const [person, setPerson] = useState("");
	const [errors, setErrors] = useState({});
	const history = useHistory();

	const findFormErrors = () => {
		const newErrors = {};
		if (!name || name === "") newErrors.name = "cannot be blank!";
		if (!date || date === "") newErrors.date = "select a date!";
		if (!entry || entry === "") newErrors.entry = "enter entry time!";
		if (!exit || exit === "") newErrors.exit = "enter exit time!";
		if (!reason || reason === "")
			newErrors.reason = "Enter a reason for visit!";
		if (!person || person === "")
			newErrors.person = "Enter the person name you want to visit!";

		return newErrors;
	};

	const submitEntry = (e) => {
		e.preventDefault();
		const newErrors = findFormErrors();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			db.collection("gatelog").add({
				name: name,
				date: date,
				reason: reason,
				person: person,
				entrytime: entry,
				exittime: exit,
			});
			console.log(name);
			console.log(date);
			console.log(entry);
			console.log(exit);
			console.log(reason);
			console.log(person);
			alert("Successful Entry");
			history.push(`/`);
		}
	};

	return (
		<div>
			<br />
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>Name</Form.Label>
						<Form.Control
							required
							value={name}
							type="name"
							placeholder="Enter name"
							onChange={(e) => setName(e.target.value)}
							isInvalid={!!errors.name}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.name}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridDate">
						<Form.Label>Date of Entry</Form.Label>
						<Form.Control
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
							isInvalid={!!errors.date}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.date}
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridMeet">
					<Form.Label>Whom to Meet</Form.Label>
					<Form.Control
						placeholder="Whom to Meet"
						value={person}
						type="name"
						onChange={(e) => setPerson(e.target.value)}
						required
						isInvalid={!!errors.person}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.person}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="formGridReason">
					<Form.Label>Reason of Visit</Form.Label>
					<Form.Control
						placeholder="Reason of Visit"
						value={reason}
						type="name"
						onChange={(e) => setReason(e.target.value)}
						required
						isInvalid={!!errors.person}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.reason}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEntry">
						<Form.Label>Entry Time</Form.Label>
						<Form.Control
							type="time"
							value={entry}
							onChange={(e) => setEntry(e.target.value)}
							required
							isInvalid={!!errors.entry}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.entry}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridExit">
						<Form.Label>Exit Time</Form.Label>
						<Form.Control
							type="time"
							value={exit}
							onChange={(e) => setExit(e.target.value)}
							required
							isInvalid={!!errors.entry}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.exit}
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<Button variant="primary" type="submit" onClick={submitEntry}>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default AddEntry;
