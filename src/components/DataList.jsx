import { useEffect } from 'react';

export default function DataList({ query, data, selectedIndex, onClick }) {
	useEffect(() => {
		document
			.querySelector(`li:nth-child(${selectedIndex + 1})`)
			.scrollIntoView({ block: 'nearest' });
	}, [query, selectedIndex]);

	return (
		<ul>
			{data.map(({ description, key, type }, index) => (
				<li
					key={key}
					className={`${index === selectedIndex ? 'selected' : ''}`}
					onClick={() => onClick(index)}
				>
					{type === description ? (
						description
					) : (
						<span
							dangerouslySetInnerHTML={{
								__html: highlightDescription(query, description),
							}}
						></span>
					)}
				</li>
			))}
		</ul>
	);
}

function highlightDescription(query, description) {
	if (!query.trim()) {
		return description;
	}

	return createHighlighTexts(buildBoldTexts());

	function buildBoldTexts() {
		const boldTexts = new Array(description.length).fill(false);

		for (let i = 0; i < description.length; ) {
			const end = i + query.length;
			const substring = description.slice(i, end);
			if (substring.toLowerCase() === query.toLowerCase()) {
				boldTexts.fill(true, i, end);
				i = end;
			} else {
				i++;
			}
		}

		return boldTexts;
	}

	function createHighlighTexts(boldTexts) {
		let result = '';
		for (let i = 0; i < description.length; i++) {
			let str = description[i];

			const addBoldOpenTag = boldTexts[i] === true && boldTexts[i - 1] !== true;
			const addBoldCloseTag =
				boldTexts[i] === true && boldTexts[i + 1] !== true;

			if (addBoldOpenTag) {
				str = '<b>' + str;
			}

			if (addBoldCloseTag) {
				str = str + '</b>';
			}

			result += str;
		}

		return result;
	}
}
