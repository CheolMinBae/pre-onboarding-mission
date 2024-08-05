import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../assets/iconSearch.svg';

const SearchButton = ({ search }: { search: () => void }) => {
  return (
    <ButtonWrapper type="button" onClick={search}>
      <IconSearch width={50} height={50} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  > svg {
    pointer-events: none;
  }
`;

export default SearchButton;
