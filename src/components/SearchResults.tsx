import { dummy } from "../mocks/dummy";

export interface Results {
  description: string;
  key: string;
  type: string;
}

interface SearchResultsProps {
  keyWord: string;
}

function SearchResults({ keyWord }: SearchResultsProps) {
  const highlightText = (text: string) => {
    if (!keyWord) return text;
    const regex = new RegExp(`(${keyWord})`, 'gi');
    const parts = text.split(regex);
  
    return parts.map((part, index) => 
      regex.test(part) ? <strong key={index}>{part}</strong> : part
    );
  };

  const groupedItems = dummy.reduce<Record<string, Results[]>>((acc, item) => {
    // 데이터의 type이 없을 시 빈 배열로 초기화
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    // 각 타입의 배열에 아이템 추가
    acc[item.type].push(item);

    return acc;
  }, {});

  if (!keyWord) return null;

  return (
    <>
      {Object.entries(groupedItems).map(([type, typeItems]) => (
        <div key={type}>
          <h3>{type}</h3>
          {typeItems.map((item) => (
            <div key={item.key}>{highlightText(item.description)}</div>
          ))}
        </div>
      ))}
    </>
  );
}

export default SearchResults;