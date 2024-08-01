import { IQueryProps } from "../types/search.type";
import styles from "./search_form.module.scss";

export default function SearchForm(props: IQueryProps) {
  const inputOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    props.setQuery(e.currentTarget.value);

  return (
    <form className={styles.form}>
      <input
        type='search'
        className={styles.input}
        value={props.query}
        onChange={inputOnChangeHandler}
        placeholder='검색어를 입력해주세요.'
      />
    </form>
  );
}
