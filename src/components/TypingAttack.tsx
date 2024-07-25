import React, { useState, useEffect, useRef } from "react";
import { dummy } from "../data/data";
import "../styles/TypingAttack.css";
import GameOverModal from "./GameOverModal";

interface Word {
	text: string;
	x: number;
	y: number;
	speed: number;
}

interface TypingAttackProps {
	onGameOver: () => void;
}

const TypingAttack: React.FC<TypingAttackProps> = ({ onGameOver }) => {
	const [words, setWords] = useState<Word[]>([]);
	const [input, setInput] = useState("");
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [startTime, setStartTime] = useState(Date.now());
	const [gameStarted, setGameStarted] = useState(false);
	const [countdown, setCountdown] = useState(5);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [showGameOverModal, setShowGameOverModal] = useState(false);

	useEffect(() => {
		if (countdown > 0) {
			const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
			return () => clearTimeout(timer);
		} else if (countdown === 0) {
			setGameStarted(true);
			setStartTime(Date.now());
		}
	}, [countdown]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const gameLoop = setInterval(() => {
			if (gameOver || !gameStarted) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// 새 단어 추가
			if (Math.random() < 0.01 && words.length < 5) {
				const usedWords = words.map((w) => w.text);
				const availableWords = dummy.filter((d) => !usedWords.includes(d.description));
				if (availableWords.length > 0) {
					const newWord: Word = {
						text: availableWords[Math.floor(Math.random() * availableWords.length)].description,
						x: Math.random() * (canvas.width - 100),
						y: 0,
						speed: 0.5 + Math.min((Date.now() - startTime) / 60000, 1.5),
					};
					setWords((prevWords) => [...prevWords, newWord]);
				}
			}

			// 단어 이동 및 그리기
			setWords((prevWords) =>
				prevWords.map((word) => {
					word.y += word.speed;
					ctx.strokeStyle = "white";
					ctx.lineWidth = 10;
					ctx.strokeText(word.text, word.x, word.y);

					ctx.fillStyle = "black";
					ctx.font = '20px "Press Start 2P"';
					ctx.fillText(word.text, word.x, word.y);

					// 게임 오버 체크
					if (word.y > canvas.height) {
						setGameOver(true);
						clearInterval(gameLoop);
						setShowGameOverModal(true);
					}

					return word;
				})
			);
		}, 16);

		return () => clearInterval(gameLoop);
	}, [gameOver, gameStarted, startTime]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleInputSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setWords((prevWords) =>
			prevWords.filter((word) => {
				if (word.text.toLowerCase() === input.toLowerCase()) {
					setScore((prevScore) => prevScore + 1);
					return false;
				}
				return true;
			})
		);
		setInput("");
	};

	return (
		<div className="typing-attack">
			<canvas ref={canvasRef} className="game-canvas" />
			{!gameStarted && (
				<div className="countdown">
					<h2>Game starts in: {countdown}</h2>
				</div>
			)}
			<form onSubmit={handleInputSubmit} className="input-form">
				<input
					type="text"
					value={input}
					onChange={handleInputChange}
					placeholder="Type the words here"
					className="word-input"
				/>
			</form>
			<div className="score">Score: {score}</div>
			{showGameOverModal && (
				<GameOverModal
					score={score}
					onRestart={() => {
						setGameOver(false);
						setScore(0);
						setWords([]);
						setCountdown(5);
						setGameStarted(false);
						setShowGameOverModal(false);
					}}
					onQuit={() => {
						setShowGameOverModal(false);
						onGameOver();
					}}
				/>
			)}
		</div>
	);
};

export default TypingAttack;
