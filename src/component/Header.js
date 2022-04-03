import React from "react";

function Header({ points }) {
	return (
		<div className="header">
			<div className="header-container">
				<img src="/images/logo-bonus.svg" alt="logo" />
				<div className="score">
					<p>score</p>
					<h1>{points}</h1>
				</div>
			</div>
		</div>
	);
}

export default Header;
