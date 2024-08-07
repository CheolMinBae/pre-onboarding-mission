import Search from '../icon/SearchIcon';

const SearchButton = () => {
  const onSubmit = () => {
    console.log('검색어 결과 페이지 이동...');
  };

  return (
    <button
      type='submit'
      className='search-button'
      onSubmit={onSubmit}
      aria-label='검색 버튼'
    >
      <Search />
    </button>
  );
};

export default SearchButton;
