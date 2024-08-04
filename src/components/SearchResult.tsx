import { v4 as uuidv4 } from "uuid";
// data
import { dummy } from "../../data";
// hooks
import useDebounce from "../hooks/useDebounce";
// types
import { ISearchProps } from "../types/search.type";
// styles
import styles from "./search_result.module.scss";

export default function SearchResult(props: ISearchProps) {
  const dummyTypes = [...new Set(dummy.map((dummyItem) => dummyItem.type))];
  const debouncedQuery = useDebounce(props.query);

  // input search keyword highlight
  const getHighlightKeyword = (dummyDescription: string) => {
    if (!debouncedQuery.trim()) return <span>{dummyDescription}</span>;

    const regexp = new RegExp(
      `(${debouncedQuery.replace(/(\(|\))/g, "\\$1")})`,
      "gi"
    );

    const keywordMatchResultArray = dummyDescription.split(regexp);

    return keywordMatchResultArray.map((keyword) =>
      regexp.test(keyword) ? (
        <strong key={uuidv4()}>{keyword}</strong>
      ) : (
        <span key={uuidv4()}>{keyword}</span>
      )
    );
  };

  // list hover
  const liMouseOverHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const { index, name } = e.currentTarget.dataset;

    if (index === undefined || name === undefined) return;
    if (+index === props.focusedListIndex) return;

    props.setFocusedListIndex(+index);
    props.setQuery(name);
  };

  const searchResultLiElement = (dummyTypeName: string) => {
    // focused list background color css
    const focusedLiClassName = (dummyItemIndex: number) => {
      return dummyItemIndex === props.focusedListIndex
        ? styles.result_li_focused
        : "";
    };

    return dummy.map(
      (dummyItem, dummyItemIndex) =>
        dummyItem.type === dummyTypeName && (
          <li
            key={uuidv4()}
            onMouseOver={(e) => liMouseOverHandler(e)}
            data-index={dummyItemIndex}
            data-name={dummyItem.description}
            className={focusedLiClassName(dummyItemIndex)}
          >
            {getHighlightKeyword(dummyItem.description)}
          </li>
        )
    );
  };

  return (
    <>
      {props.query.length > 0 && (
        <section className={styles.result_section}>
          {dummyTypes.map((dummyTypeName) => (
            <ul key={uuidv4()} className={styles.result_ul}>
              <h3 className={styles.type_name}>{dummyTypeName}</h3>
              {searchResultLiElement(dummyTypeName)}
            </ul>
          ))}
        </section>
      )}
    </>
  );
}
