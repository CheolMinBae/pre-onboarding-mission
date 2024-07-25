import React, { useState, useEffect, useRef } from "react";
import { dummy } from "../data/data";
import AutoComplete from "./AutoComplete";
import TypingAttack from "./TypingAttack";
import "../styles/SearchBar.css";

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [showAutoComplete, setShowAutoComplete] = useState(false);
	const [showGame, setShowGame] = useState(false);
	const searchBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
				setShowAutoComplete(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setShowAutoComplete(e.target.value.length > 0);
	};

	const handleSearch = () => {
		if (searchTerm.toLowerCase() === "typing attack") {
			setShowGame(true);
		} else {
			console.log("Searching for:", searchTerm);
		}
	};

	const handleGameOver = () => {
		setShowGame(false);
	};

	const filteredData = dummy.filter((item) => item.description.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<div className="search-bar-container" ref={searchBarRef}>
			<div className="search-input-wrapper">
				<input
					type="text"
					value={searchTerm}
					onChange={handleInputChange}
					placeholder="Search..."
					className="search-input"
				/>
				<button onClick={handleSearch} className="search-button">
					Search
				</button>
			</div>
			{showAutoComplete && (
				<div className="auto-complete-container">
					{filteredData.length > 0 ? (
						<AutoComplete
							data={filteredData}
							searchTerm={searchTerm}
							onSelect={(selected) => {
								setSearchTerm(selected);
								setShowAutoComplete(false);
							}}
						/>
					) : (
						<div className="no-results">No results found</div>
					)}
				</div>
			)}
			{showGame && <TypingAttack onGameOver={handleGameOver} />}
		</div>
	);
};

export default SearchBar;
