import React from "react";

function Modal({ open, onClose }) {
	if (!open) return null;

	return (
		<>
			<div className="overlay"></div>
			<aside className="rules">
				<div className="rules-header">
					<p>RULES</p>
					<img src="images/icon-close.svg" alt="close" onClick={onClose} />
				</div>
				<img src="/images/image-rules-bonus.svg" alt="rules" />
			</aside>
		</>
	);
}

export default Modal;
