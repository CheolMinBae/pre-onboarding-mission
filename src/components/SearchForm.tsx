import { IQueryProps } from "../types/search.type";

export default function SearchForm(props: IQueryProps) {
  const inputOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    props.setQuery(e.currentTarget.value);

  return (
    <form>
      <input
        type='search'
        value={props.query}
        onChange={inputOnChangeHandler}
        placeholder='검색어를 입력해주세요.'
      />
    </form>
  );
}
