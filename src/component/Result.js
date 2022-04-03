import React, { useEffect, useState } from "react";

function Result({ playerChoice, setPlayerChoice, updatePoint }) {
	const [houseChoice, setHouseChoice] = useState(null);
	const [status, setStatus] = useState(null);

	useEffect(() => {
		const choices = ["rock", "paper", "scissors", "spock", "lizard"];
		const pick = Math.floor(Math.random() * 100) % 5;
		setHouseChoice(choices[pick]);
		console.log("👋 house choice are set ------>");
	}, []);

	useEffect(() => {
		console.log("👋 set game status ------>");
		if (playerChoice === houseChoice) {
			setStatus("Tie");
		}
	}, [houseChoice]);

	return (
		<div className="result">
			<div className="result-container">
				<div className="pick-container">
					<p>YOU PICKED</p>
					<div className={`picked ${playerChoice}`}>
						<img src={`/images/icon-${playerChoice}.svg`} alt={playerChoice} />
					</div>
				</div>
				<div className="pick-container">
					<p>THE HOUSE PICKED</p>
					<div className={`picked ${houseChoice}`}>
						<img src={`/images/icon-${houseChoice}.svg`} alt={houseChoice} />
					</div>
				</div>
			</div>

			<div className="winner" onClick={() => setPlayerChoice(null)}>
				<p>{status}</p>
				<div className="play-again">PLAY AGAIN</div>
			</div>
		</div>
	);
}

export default Result;
