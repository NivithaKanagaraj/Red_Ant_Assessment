import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Admin from "./Components/Admin";
import Main from "./Components/Main";
import AddEntry from "./Components/AddEntry";

import React, { useState } from "react";

function App() {
	const [user] = useState(localStorage.getItem("user") || "");
	return (
		<div className="App">
			<>
				<Router>
					<Switch>
						{/* {user === "admin" ? ( */}
						<Route path="/admin" component={Admin} />
						{/* // ) : null} */}

						<Route path="/new">
							<Header />
							<AddEntry />
						</Route>
						<Route path="/login">
							<Header />
							<Login />
						</Route>

						<Route path="/">
							<Header />
							<Main />
						</Route>
					</Switch>
				</Router>
			</>
		</div>
	);
}

export default App;
