import InputBox from '@component/InputBox';
import * as S from './index.style';
import SearchButton from '@component/Button/Search';
import { ChangeEvent, useState } from 'react';
import Dropdown from '@component/Dropdown';
import { dummy } from '@/assets/data';

const SearchLayout = () => {
  const [value, setValue] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <S.SearchLayoutContainer>
      <S.SearchWrapper>
        <S.SearchInputWrapper>
          <InputBox value={value} onChange={inputHandler} />
          {value.length > 0 && <Dropdown value={value} data={dummy} />}
        </S.SearchInputWrapper>
        <SearchButton />
      </S.SearchWrapper>
    </S.SearchLayoutContainer>
  );
};

export default SearchLayout;
