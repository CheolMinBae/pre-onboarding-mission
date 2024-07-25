import React from "react";
import SearchBar from "./components/SearchBar";
import RainyBackground from "./components/RainyBackground";
import "./styles/global.css";

const App: React.FC = () => {
	return (
		<div className="App">
			<RainyBackground />
			<div className="search-container">
				<SearchBar />
			</div>
		</div>
	);
};

export default App;
