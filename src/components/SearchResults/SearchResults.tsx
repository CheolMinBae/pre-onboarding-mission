import { useState, useEffect, useCallback, useMemo } from 'react';
import { dummy } from "../../mocks/dummy";

import styles from './SearchResults.module.css';

export interface Results {
  description: string;
  key: string;
  type: string;
}

interface SearchResultsProps {
  keyWord: string;
}

function SearchResults({ keyWord }: SearchResultsProps) {
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyWord);

  const highlightText = useCallback((text: string) => {
    if (!debouncedKeyword) return text;
    const regex = new RegExp(`(${debouncedKeyword})`, 'gi');
    const parts = text.split(regex);
  
    return parts.map((part, index) => 
      regex.test(part) ? <strong key={index}>{part}</strong> : part
    );
  }, [debouncedKeyword]);

  const groupedItems =useMemo(() => {
    return dummy.reduce<Record<string, Results[]>>((acc, item) => {
      // 데이터의 type이 없을 시 빈 배열로 초기화
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      // 각 타입의 배열에 아이템 추가
      acc[item.type].push(item);

      return acc;
    }, {});
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyWord);
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [keyWord]);

  if (!debouncedKeyword) return null;

  return (
    <div className={styles.container}>
      {Object.entries(groupedItems).map(([type, typeItems]) => (
        <div key={type}>
          <h3 className={styles.title}>{type}</h3>
          {typeItems.map((item) => (
            <div
             key={item.key}
             className={styles.item}
            >
              {highlightText(item.description)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;