export default function Search({ query, onChange }) {
	return (
		<>
			<input
				type="text"
				placeholder="search..."
				value={query}
				onChange={(e) => onChange(e.target.value)}
			/>
		</>
	);
}
