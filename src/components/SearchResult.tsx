import { dummy } from "../../data";
import { v4 as uuidv4 } from "uuid";
import useDebounce from "../hooks/useDebounce";
import styles from "./search_result.module.scss";
import { ISearchProps } from "../types/search.type";

export default function SearchResult(props: ISearchProps) {
  const dummyTypes = [...new Set(dummy.map((dummyItem) => dummyItem.type))];
  const debouncedQuery = useDebounce(props.query);

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

  const liMouseOverHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const { index, name } = e.currentTarget.dataset;

    if (index === undefined || name === undefined) return;
    if (+index === props.focusedListIndex) return;

    props.setFocusedListIndex(+index);
    props.setQuery(name);
  };

  const dummyItemLiElement = (dummyTypeName: string) => {
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
          {dummyTypes.map((dummyTypeItem) => (
            <ul key={uuidv4()} className={styles.result_ul}>
              <h3 className={styles.type_name}>{dummyTypeItem}</h3>
              {dummyItemLiElement(dummyTypeItem)}
            </ul>
          ))}
        </section>
      )}
    </>
  );
}
