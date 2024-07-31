import React from "react";
import "../styles/GameOverModal.css";

interface GameOverModalProps {
	score: number;
	onRestart: () => void;
	onQuit: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ score, onRestart, onQuit }) => {
	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h2>Game Over!</h2>
				<p>Your score: {score}</p>
				<button onClick={onRestart}>Restart</button>
				<button onClick={onQuit}>Quit</button>
			</div>
		</div>
	);
};

export default GameOverModal;
