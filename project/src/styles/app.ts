import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

const SearchBox = styled.div`
  width: 250px;

  > input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 0 15px 0 15px;
  }
`;

const RecommendList = styled.dl`
  width: 100%;
  max-height: 200px;
  list-style-type: none;
  overflow-y: scroll;
  padding: 0;

  dt {
    color: #ffffff;
    background-color: #888888;
    padding: 10px;
  }

  dt,
  dd {
    text-align: left;
    margin: 0;
  }
`;

export { SearchForm, SearchBox, RecommendList };
