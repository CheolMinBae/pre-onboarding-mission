import { useState } from 'react';
import './App.css';
import DataList from './components/DataList';
import Search from './components/Search';
import { dummy } from './data/data';

const data = trasformDataList(dummy);

export default function App() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [query, setQuery] = useState('');

	const handleChange = (inputValue) => {
		setQuery(inputValue);
	};

	const handleClick = (index) => {
		setSelectedIndex(index);
	};

	const handleKeyDown = (e) => {
		if (!query) {
			return;
		}

		if (e.key === 'ArrowUp') {
			setSelectedIndex(Math.max(0, selectedIndex - 1));
		} else if (e.key === 'ArrowDown') {
			setSelectedIndex(Math.min(selectedIndex + 1, data.length - 1));
		}
	};

	return (
		<main>
			<section onKeyDown={handleKeyDown}>
				<Search onChange={handleChange} />
				{query && (
					<DataList
						data={data}
						query={query}
						selectedIndex={selectedIndex}
						onClick={handleClick}
					/>
				)}
			</section>
			<button>Search</button>
		</main>
	);
}

function trasformDataList(data) {
	const items = data.slice().sort((a, b) => {
		if (a.type < b.type) {
			return -1;
		}

		if (a.type > b.type) {
			return 1;
		}

		return 0;
	});

	const result = [];
	const types = new Set(data.map((item) => item.type));

	for (const { type, description, key } of items) {
		if (types.has(type)) {
			result.push({ description: type, key: type, type });
			types.delete(type);
		}

		result.push({ type, description, key });
	}

	return result;
}
