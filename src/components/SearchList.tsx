import React from 'react';
import { dummy } from '../data/data';

type TSearchListProps = {
  search: string;
};
type TDummy = {
  type: string;
  key: string;
  description: string;
};

const searchBold = (text: string, search: string) => {
  if (!search) return text;

  const parts = text.split(new RegExp(`(${search})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <b key={index}>{part}</b>
    ) : (
      part
    )
  );
};

const searchResultList = (search: string) =>
  dummy.map((item: TDummy, index: number) => {
    const [cur, before] = [item, dummy[index - 1] || { type: null }];

    return (
      <React.Fragment key={index}>
        {(cur.type !== before.type || index === 0) && (
          <li className="bg-blue-400">{item.type}</li>
        )}
        <li className="bg-blue-100" key={item.key}>
          {searchBold(item.description, search)}
        </li>
      </React.Fragment>
    );
  });

const SearchList = (props: TSearchListProps) => {
  const { search } = props;
  return <ul className="p-2">{searchResultList(search)}</ul>;
};

export default SearchList;
