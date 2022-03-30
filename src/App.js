import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Play from "./component/Play";
import Result from "./component/Result";

function App() {
	const [playerChoice, setPlayerChoice] = useState(null);

	const set = (choice) => {
		console.log(choice);
		setPlayerChoice(choice);
	};

	return (
		<div>
			<Header />
			{!playerChoice ? <Play set={set} /> : <Result playerChoice={playerChoice} />}
		</div>
	);
}

export default App;
