import { IQueryProps } from "../types/search.type";
import { IoIosSearch } from "react-icons/io";
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

      <div className={styles.button_wrapper}>
        <button type="button" className={styles.button}>
          <IoIosSearch />
        </button>
      </div>
    </form>
  );
}
