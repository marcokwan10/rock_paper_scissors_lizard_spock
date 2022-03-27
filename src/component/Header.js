import React from "react";

function Header() {
	return (
		<div className="header">
			<div className="header-container">
				<img src="/images/logo-bonus.svg" alt="logo" />
				<div className="score">
					<p>score</p>
					<h1>12</h1>
				</div>
			</div>
		</div>
	);
}

export default Header;
