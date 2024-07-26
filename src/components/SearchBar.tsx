import React from 'react'
import styled from "styled-components";
import { Components } from '../@types';

const Bar = styled.input`
  width: 240px;
  height: 20px;
  padding: 6px;
  font-size: 0.8rem;
  border: 1px solid #0EA60E;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  color: #000;
  background: #fff;
  outline: none;
`;

const SearchBar = (props: Components) => {
  const { word, setWord } = props;

  return (
    <Bar
      type="text"
      value={word}
      onChange={(e) => setWord(e.target.value)}
      autoFocus
    />
  );
};

export default SearchBar;