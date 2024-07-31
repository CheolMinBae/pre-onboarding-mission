import React from "react";
import { DummyItem } from "../data/data";
import "../styles/AutoComplete.css";

interface AutoCompleteProps {
	data: DummyItem[];
	searchTerm: string;
	onSelect: (selected: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ data, searchTerm, onSelect }) => {
	const highlightMatch = (text: string, highlight: string) => {
		const parts = text.split(new RegExp(`(${highlight})`, "gi"));
		return parts.map((part, index) =>
			part.toLowerCase() === highlight.toLowerCase() ? <strong key={index}>{part}</strong> : part
		);
	};

	const groupedData = data.reduce((acc, item) => {
		if (!acc[item.type]) {
			acc[item.type] = [];
		}
		acc[item.type].push(item);
		return acc;
	}, {} as Record<string, DummyItem[]>);

	const sortedTypes = Object.keys(groupedData).sort();

	if (data.length === 0) {
		return <div className="no-results">No results found</div>;
	}

	return (
		<ul className="auto-complete">
			{sortedTypes.map((type) => (
				<li key={type} className="auto-complete-group">
					<div className="auto-complete-type">{type}</div>
					<ul>
						{groupedData[type]
							.sort((a, b) => a.description.localeCompare(b.description))
							.map((item) => (
								<li key={item.key} onClick={() => onSelect(item.key)} className="auto-complete-item">
									{highlightMatch(item.description, searchTerm)}
								</li>
							))}
					</ul>
				</li>
			))}
		</ul>
	);
};

export default AutoComplete;
