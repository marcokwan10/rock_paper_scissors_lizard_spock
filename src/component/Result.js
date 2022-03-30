import React from "react";

function Result({ playerChoice }) {
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
					<div className="picked rock">
						<img src="/images/icon-rock.svg" alt="rock" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Result;
