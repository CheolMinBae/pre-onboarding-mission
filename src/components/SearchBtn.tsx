import React, { useCallback } from 'react'
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiMagnify } from "@mdi/js";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.81px;
  height: 33.81px;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background: #0EA60E;
  cursor: pointer;
`;

const SearchBtn = () => {
  const onClickSearchButton = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <Button onClick={onClickSearchButton}>
      <Icon path={mdiMagnify} size={0.9} color="#fff" />
    </Button>
  );
};

export default SearchBtn;