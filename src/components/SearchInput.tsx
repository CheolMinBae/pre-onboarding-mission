import { ChangeEvent } from 'react';
import X from '../icon/XIcon';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchInput({ query, setQuery }: Props) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const onResetClick = () => setQuery('');

  return (
    <>
      <input
        type='text'
        aria-label='검색어 입력 필드'
        id='search'
        value={query}
        onChange={onChange}
        className='input'
      />
      <button
        aria-label='입력 초기화 버튼'
        type='button'
        className='x-button'
        onClick={onResetClick}
      >
        <X />
      </button>
    </>
  );
}

export default SearchInput;
