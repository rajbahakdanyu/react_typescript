import React, { useState } from "react";
import "./App.css";

function App() {
	const [people, setPeople] = useState([]);

	people.map((person) => {
		person.name;
	});

	return (
		<div className='App'>
			<h1>People invited to my party</h1>
		</div>
	);
}

export default App;
