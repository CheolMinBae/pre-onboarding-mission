import React, { useCallback, useEffect, useState } from 'react';
import { dummy } from "../../data";
import styled from 'styled-components';
import { Company, Components } from '../@types';

const Layout = styled.ul`
  padding: 0;
  margin: 0;
  width: 285.8px;
  height: 136px;
  border: 1px solid #ccc;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  -ms-overflow-style: none;
  overflow-y: auto;
`;

const Column = styled.li`
  list-style: none;
  font-size: 0.8rem;
  padding: 4px 6px;
  color: #000;
  cursor: pointer;
  &:hover {
    background: #0EA60E;
    color: #fff;
  }
`;

const MarkText = styled.mark`
  font-weight: bold;
  background: transparent;
  color: inherit;
`;

const defaultData: Company[] = [
  {
    description: "COMPANY",
    key: "COMPANY_LIST",
    type: "COMPANY"
  },
];

const SearchList = (props: Components) => {
  const { word } = props;
  const [ data, setData ] = useState<Company[]>(defaultData.concat(dummy));

  const highlight = useCallback((text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <MarkText key={i}>{part}</MarkText>
          ) : (
            part
          ),
        )}
      </>
    );
  }, []);

  return (
    <Layout className='list-box'>
      {data.map((col) => (
        <Column key={col.key}>
          { highlight( col.description, word) }
        </Column>
      ))}
    </Layout>
  );
};

export default SearchList;