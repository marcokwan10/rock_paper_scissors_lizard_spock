import React from "react";

function Play({ set }) {
	return (
		<div className="play">
			<div className="play-container">
				<img src="/images/bg-pentagon.svg" alt="pentagon" className="pentagon" />

				<div className="choice scissors" onClick={() => set("scissors")}>
					<img src="/images/icon-scissors.svg" alt="scissors" />
				</div>
				<div className="choice paper" onClick={() => set("paper")}>
					<img src="/images/icon-paper.svg" alt="paper" />
				</div>
				<div className="choice rock" onClick={() => set("rock")}>
					<img src="/images/icon-rock.svg" alt="rock" />
				</div>
				<div className="choice spock" onClick={() => set("spock")}>
					<img src="/images/icon-spock.svg" alt="spock" />
				</div>
				<div className="choice lizard" onClick={() => set("lizard")}>
					<img src="/images/icon-lizard.svg" alt="lizard" />
				</div>
			</div>
			<div className="rules">
				<p>RULES</p>
			</div>
		</div>
	);
}

export default Play;
