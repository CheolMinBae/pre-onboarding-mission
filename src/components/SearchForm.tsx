import { ISearchProps } from "../types/search.type";
import { IoIosSearch } from "react-icons/io";
import styles from "./search_form.module.scss";
import { dummy } from "../../data";

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ESCAPE = "Escape";

export default function SearchForm(props: ISearchProps) {
  const inputOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    props.setQuery(e.currentTarget.value);

  const arrowUpKeyHandler = () => {
    props.setFocusedListIndex((prev) => {
      const newFocusedListIndex = prev <= 0 ? dummy.length - 1 : prev - 1;
      if (newFocusedListIndex !== prev)
        props.setQuery(`${dummy[newFocusedListIndex].description}`);
      return newFocusedListIndex;
    });
  };

  const arrowDownKeyHandler = () => {
    props.setFocusedListIndex((prev) => {
      const newFocusedListIndex = prev === dummy.length - 1 ? 0 : prev + 1;
      if (newFocusedListIndex !== prev)
        props.setQuery(`${dummy[newFocusedListIndex].description}`);

      return newFocusedListIndex;
    });
  };

  const escapeKeyHandler = () => {
    props.setFocusedListIndex(-1);
  };

  const inputOnKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyArr = [ARROW_UP, ARROW_DOWN, ESCAPE];

    if (e.nativeEvent.isComposing || !keyArr.includes(e.code)) return;

    switch (e.key) {
      case ARROW_UP:
        arrowUpKeyHandler();
        break;
      case ARROW_DOWN:
        arrowDownKeyHandler();
        break;
      case ESCAPE:
        escapeKeyHandler();
        break;
    }
  };

  return (
    <form className={styles.form}>
      <input
        type='search'
        className={styles.input}
        value={props.query}
        onChange={inputOnChangeHandler}
        onKeyDown={inputOnKeyDownHandler}
        placeholder='검색어를 입력해주세요.'
      />

      <div className={styles.button_wrapper}>
        <button type='button' className={styles.button}>
          <IoIosSearch />
        </button>
      </div>
    </form>
  );
}
