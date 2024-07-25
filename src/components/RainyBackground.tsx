import React, { useEffect, useRef } from "react";
import "../styles/RainyBackground.css";

interface Cloud {
	x: number;
	y: number;
	speed: number;
	type: number;
}

interface Ship {
	x: number;
	y: number;
	speed: number;
}

interface Raindrop {
	x: number;
	y: number;
	speed: number;
	size: number;
	splashing: boolean;
}

interface Splash {
	x: number;
	y: number;
	size: number;
	opacity: number;
}

const RainyBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const raindrops: Raindrop[] = [];
		const clouds: Cloud[] = [];
		const splashes: Splash[] = [];
		const ship: Ship = {
			x: canvas.width,
			y: canvas.height - 120,
			speed: 0.5,
		};

		const cloudTypes = [
			(x: number, y: number, ctx: CanvasRenderingContext2D) => {
				ctx.fillRect(x, y, 200, 60);
				ctx.fillRect(x + 20, y - 20, 160, 40);
			},
			(x: number, y: number, ctx: CanvasRenderingContext2D) => {
				ctx.fillRect(x, y, 180, 50);
				ctx.fillRect(x + 30, y - 25, 120, 35);
				ctx.fillRect(x + 60, y + 20, 70, 30);
			},
			(x: number, y: number, ctx: CanvasRenderingContext2D) => {
				ctx.fillRect(x, y, 160, 45);
				ctx.fillRect(x + 40, y - 20, 80, 30);
				ctx.fillRect(x + 20, y + 15, 120, 35);
			},
		];

		// 구름 개수 설정
		const cloudCount = 4;

		for (let i = 0; i < 100; i++) {
			raindrops.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				speed: Math.random() * 5 + 2,
				size: Math.random() * 3 + 1,
				splashing: Math.random() < 0.2, // 20% 확률로 튀는 효과를 줌
			});
		}

		for (let i = 0; i < cloudCount; i++) {
			clouds.push({
				x: Math.random() * canvas.width,
				y: Math.random() * (canvas.height / 2),
				speed: Math.random() * 0.5 + 0.1,
				type: Math.floor(Math.random() * cloudTypes.length),
			});
		}

		function drawShip(ctx: CanvasRenderingContext2D, x: number, y: number) {
			ctx.fillStyle = "#8B4513"; // 나무색
			ctx.fillRect(x, y, 60, 20); // 배 몸체
			ctx.fillRect(x + 25, y - 40, 10, 40); // 돛대

			ctx.fillStyle = "#FFFFFF"; // 하얀색
			ctx.fillRect(x + 15, y - 30, 30, 25); // 돛
		}

		function draw() {
			if (!canvas || !ctx) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// 하늘
			ctx.fillStyle = "#2c3e50";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// 바다
			ctx.fillStyle = "#3498db";
			ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

			// 구름
			ctx.fillStyle = "#bdc3c7";
			clouds.forEach((cloud) => {
				cloudTypes[cloud.type](cloud.x, cloud.y, ctx);
				cloud.x += cloud.speed;
				if (cloud.x > canvas.width) {
					cloud.x = -200;
					cloud.y = Math.random() * (canvas.height / 2);
					cloud.type = Math.floor(Math.random() * cloudTypes.length);
				}
			});

			// 배
			drawShip(ctx, ship.x, ship.y);
			ship.x -= ship.speed;
			if (ship.x < -100) {
				ship.x = canvas.width;
			}

			// 비
			ctx.fillStyle = "#ecf0f1";
			raindrops.forEach((drop) => {
				ctx.fillRect(drop.x, drop.y, drop.size, drop.size);
				drop.y += drop.speed;
				if (drop.y > canvas.height - 100 && drop.splashing) {
					// 바다에 닿았을 때 튀는 효과 생성
					splashes.push({
						x: drop.x,
						y: canvas.height - 100 + Math.random() * 100, // 바다 중간에서도 효과가 나타나도록
						size: Math.random() * 3 + 2,
						opacity: 1,
					});
					drop.y = 0;
					drop.x = Math.random() * canvas.width;
				} else if (drop.y > canvas.height) {
					drop.y = 0;
					drop.x = Math.random() * canvas.width;
				}
			});

			// 튀는 효과 그리기
			splashes.forEach((splash, index) => {
				ctx.fillStyle = `rgba(255, 255, 255, ${splash.opacity})`;
				ctx.fillRect(splash.x, splash.y, splash.size, splash.size);
				splash.opacity -= 0.02;
				splash.y -= 0.5;
				if (splash.opacity <= 0) {
					splashes.splice(index, 1);
				}
			});

			requestAnimationFrame(draw);
		}

		draw();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return <canvas ref={canvasRef} className="rainy-background" />;
};

export default RainyBackground;
