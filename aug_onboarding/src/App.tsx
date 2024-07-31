import { useState } from 'react';
import { dummy } from './data';
import { DummyItem } from './types';
import './App.css';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const Input = styled.input`
	width: 200px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 5px;
	/* box-sizing: border-box; */
`;
const Dropbox = styled.div`
	background-color: #fff;
	max-height: 100px;
	overflow-y: auto;
	padding: 0px;
	position: absolute;
	width: 200px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 50px;
`;

const Group = styled.span`
	background-color: pink;
`;

const SearchIcon = styled(FiSearch)`
	cursor: pointer;
	background-color: pink;
	border-radius: 5px;
	border: 1px solid #ccc;
	color: #555;
	font-size: 24px;
	margin-left: 4px;
	padding: 2px;
	&:hover {
		color: #fff;
	}
`;

function App() {
	// 검색 기능 구현 : 입력된 검색어를 기반으로 더미 데이터에서 일치하는 항목 찾기
	const [searchTerm, setSearchTerm] = useState<string>('');

	// 검색 폼 만들기 : 검색어를 입력받을 폼을 만들기
	const searchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	// 하이라이팅 구현 : 검색어와 일치하는 부분을 하이라이팅
	const highlighText = (text: string, highlight: string) => {
		if (!highlight.trim()) {
			return text;
		}

		const regex = new RegExp(`(${highlight})`, 'gi');
		const parts = text.split(regex);
		return (
			<span>
				{parts.map((part, index) =>
					part.toLowerCase() === highlight.toLowerCase() ? (
						<strong key={index}>{part}</strong>
					) : (
						part
					)
				)}
			</span>
		);
	};

	// 데이터를 타입별로 그룹화
	const groupedData = dummy.reduce((acc: Record<string, DummyItem[]>, item) => {
		if (!acc[item.type]) {
			acc[item.type] = [];
		}
		acc[item.type].push(item);
		return acc;
	}, {});

	return (
		<Wrapper>
			<div>
				<Input
					type='text'
					value={searchTerm}
					onChange={searchItem}
				/>
				<Dropbox>
					{searchTerm &&
						Object.keys(groupedData).map((type) => (
							<Group key={type}>
								<span>{type}</span>
								{groupedData[type].map((item) => (
									<div key={item.key}>
										{highlighText(item.description, searchTerm)}
									</div>
								))}
							</Group>
						))}
				</Dropbox>
			</div>
			<SearchIcon />
		</Wrapper>
	);
}

export default App;

/** 해야할 것
 * input에 글을 쓰면 데이터가 보여지게 - 드롭박스 형식으로 [0]
 * 버튼 기능 굳이 없어도 되긴 한데 ;;
 * type별로 길이 제한 두려고
 * style 시작 ! -> Component 나누기
 * style 완료
 * component 나누기
 */
