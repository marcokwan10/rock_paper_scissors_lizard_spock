import React, { useEffect, useMemo, useState } from "react";

function Result({ playerChoice, setPlayerChoice, updatePoint }) {
	const [houseChoice, setHouseChoice] = useState(null);
	const [status, setStatus] = useState(null);

	const rules = useMemo(() => {
		return [
			{
				choice: "rock",
				beats: ["lizard", "scissors"],
			},
			{
				choice: "paper",
				beats: ["rock", "spock"],
			},
			{
				choice: "scissors",
				beats: ["lizard", "paper"],
			},
			{
				choice: "lizard",
				beats: ["spock", "paper"],
			},
			{
				choice: "spock",
				beats: ["scissors", "rock"],
			},
		];
	}, []);

	useEffect(() => {
		const pick = Math.floor(Math.random() * 100) % 5;
		setHouseChoice(rules[pick]["choice"]);
	}, []);

	useEffect(() => {
		if (houseChoice) {
			let playerPicked = rules.find((pick) => pick.choice === playerChoice);
			if (playerChoice === houseChoice) {
				setStatus("Tie");
			} else if (playerPicked.beats.includes(houseChoice)) {
				setStatus("YOU WIN");
				updatePoint(1);
			} else {
				setStatus("YOU LOSE");
				updatePoint(0);
			}
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
