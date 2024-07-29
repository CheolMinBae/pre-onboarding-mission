import { useCallback, useRef, useState } from "react";
import SearchList from "./SearchList";

export default function App() {
	const [keyword, setKeyword] = useState("");
	const [throttledKeyword, setThrottledKeyword] = useState("");

	const timerRef = useRef(null);

	const handleChange = (e) => setKeyword(e.target.value);

	const throttleSearch = useCallback(
		(keyword) => {
			if (timerRef.current) return;

			timerRef.current = setTimeout(() => {
				setThrottledKeyword(() => keyword);
				timerRef.current = null;
			}, 300);
		},
		[timerRef.current]
	);

	throttleSearch(keyword);

	return (
		<>
			<hr className="border-t-8 border-t-black" />
			<div className="m-2 flex gap-4">
				<div className="w-80 relative">
					<input
						type="text"
						value={keyword}
						onChange={handleChange}
						className="rounded-lg border-black border w-full focus-visible:outline-cyan-600 px-1 text-lg"
					/>
					{throttledKeyword && <SearchList keyword={throttledKeyword} />}
				</div>
				<button type="button" className="border border-black rounded px-1">
					search
				</button>
			</div>
		</>
	);
}
