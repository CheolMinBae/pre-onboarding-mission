import { dummy } from "./data";

export default function SearchList({ keyword }) {
	const sortedByTypes = {};

	dummy.forEach((dummyEl) => {
		sortedByTypes[dummyEl.type] = [
			...(sortedByTypes[dummyEl.type] || []),
			dummyEl,
		];
	});

	const types = Object.keys(sortedByTypes);

	return (
		<div className="absolute bottom-0 left-0 translate-y-full w-full border border-black h-40 overflow-y-scroll">
			{types.map((type) => (
				<div key={type}>
					<div className="bg-indigo-800 p-1 text-white">{type}</div>
					{sortedByTypes[type].map((el, i) => {
						const keywordRegExp = new RegExp(keyword, "gi");
						const matches = [...el.description.matchAll(keywordRegExp)];
						const description = el.description
							.split(keywordRegExp)
							.reduce(
								(acc, unmatched, i) => [
									...acc,
									unmatched,
									<span className="font-bold">{matches[i]}</span>,
								],
								[]
							);

						description.pop();

						return (
							<p
								key={el.type + i}
								className="p-1 cursor-pointer hover:bg-neutral-200"
							>
								<>
									{description.map((frag, i) => (
										<span key={i}>{frag}</span>
									))}
								</>
							</p>
						);
					})}
				</div>
			))}
		</div>
	);
}
