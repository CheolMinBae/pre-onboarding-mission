import React, { useCallback, useEffect, useState } from 'react';
import { dummy } from '../../../data';
import debounce from 'lodash/debounce';

export default function SearchResultList({ query }: { query: string }) {
  const type = [...new Set(dummy.map((item) => item.type))];
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const updateDebouncedQuery = useCallback(
    debounce((query) => setDebouncedQuery(query), 200),
    []
  );

  useEffect(() => {
    updateDebouncedQuery(query);
  }, [query, updateDebouncedQuery]);

  const highlightedKeyword = useCallback(
    (text: string, query: string): React.ReactNode[] => {
      if (!query) return [text];

      const regex = new RegExp(`(${query})`, 'gi');
      const parts = text.split(regex);

      console.log(1234);

      return parts.map((part, index) => {
        if (regex.test(part)) {
          return <strong key={index}>{part}</strong>;
        } else {
          return <span key={index}>{part}</span>;
        }
      });
    },
    []
  );

  return (
    <>
      {query.length > 0 && (
        <article className="border flex flex-col w-200pxr h-120pxr overflow-y-scroll">
          {type.map((item) => {
            return (
              <React.Fragment key={item}>
                <div className="text-white bg-blue-600">{item}</div>
                {dummy.map((result) => {
                  if (result.type === item) {
                    return (
                      <div key={result.key}>
                        {highlightedKeyword(result.description, debouncedQuery)}
                      </div>
                    );
                  }
                  return null;
                })}
              </React.Fragment>
            );
          })}
        </article>
      )}
    </>
  );
}
