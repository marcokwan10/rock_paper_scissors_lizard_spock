import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Play from "./component/Play";
import Result from "./component/Result";

function App() {
	const [points, setPoints] = useState(0);
	const [playerChoice, setPlayerChoice] = useState(null);

	const set = (choice) => {
		setPlayerChoice(choice);
	};

	const updatePoint = () => {
		setPoints((prev) => prev + 1);
	};

	return (
		<div>
			<Header points={points} />
			{!playerChoice ? (
				<Play set={set} />
			) : (
				<Result playerChoice={playerChoice} setPlayerChoice={set} updatePoint={updatePoint} />
			)}
		</div>
	);
}

export default App;
