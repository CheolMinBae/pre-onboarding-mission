import { ReactNode } from 'react';
import { data } from '../../data';

type Data = {
  key: string;
  type: string;
  description: string;
}[];

type SearchTextProps = {
  searchText: string;
};

const fetchData: Data = data;

function SearchList({ searchText }: SearchTextProps) {
  // 검색어 내부 특수 기호 예외 처리
  const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // 대소문자 구별 없이 검색어 그룹화 탐색
  const regex = RegExp(`(${escapedSearchText})`, 'ig');

  // 검색 결과 목록
  const searchList = fetchData.map(item => {
    const targetString = item.description; // 대상 문자열
    const boldWords: ReactNode[] = []; // 최종 렌더링 결과
    let cursor = 0; // 포인터 위치
    let findText = null;

    // 대상 문자열 탐색
    while ((findText = regex.exec(targetString)) !== null) {
      const emphasis = (
        <span key={item.key + regex.lastIndex}>{findText[0]}</span>
      );

      if (findText.index === 0) {
        boldWords.push(emphasis);
      } else {
        const prevString = targetString.substring(cursor, findText.index);

        boldWords.push(prevString, emphasis);
      }

      cursor = regex.lastIndex;
    }

    // 후열 문자열이 남아 있으면
    if (cursor < targetString.length) {
      const restString = targetString.substring(cursor);

      boldWords.push(restString);
    }

    return <li key={item.key}>{boldWords}</li>;
  });

  return (
    <div className='search-list'>
      <ul>{searchList}</ul>
    </div>
  );
}

export default SearchList;
