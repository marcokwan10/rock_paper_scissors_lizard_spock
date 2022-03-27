import React from "react";

function Play() {
	return (
		<div className="play">
			<div className="play-container">
				<img src="/images/bg-pentagon.svg" alt="pentagon" className="pentagon" />
				<div className="choice scissors">
					<img src="/images/icon-scissors.svg" alt="scissors" />
				</div>
				<div className="choice paper">
					<img src="/images/icon-paper.svg" alt="paper" />
				</div>
				<div className="choice rock">
					<img src="/images/icon-rock.svg" alt="rock" />
				</div>
				<div className="choice spock">
					<img src="/images/icon-spock.svg" alt="spock" />
				</div>
				<div className="choice lizard">
					<img src="/images/icon-lizard.svg" alt="lizard" />
				</div>
			</div>
		</div>
	);
}

export default Play;
