import { dummy } from "../../data";
import { v4 as uuidv4 } from "uuid";
import useDebounce from "../hooks/useDebounce";

export default function SearchResult(props: { query: string }) {
  const dummyTypes = [...new Set(dummy.map((dummyItem) => dummyItem.type))];
  const debouncedQuery = useDebounce(props.query);

  const getHighlightKeyword = (dummyDescription: string) => {
    if (!debouncedQuery.trim()) return <span>{dummyDescription}</span>;

    const regexp = new RegExp(`(${debouncedQuery})`, "gi");
    const keywordMatchResultArray = dummyDescription.split(regexp);

    return keywordMatchResultArray.map((keyword) =>
      regexp.test(keyword) ? (
        <strong key={uuidv4()}>{keyword}</strong>
      ) : (
        <span key={uuidv4()}>{keyword}</span>
      )
    );
  };

  const dummyItemLiElement = (dummyTypeName: string) => {
    return dummy.map(
      (dummyItem) =>
        dummyItem.type === dummyTypeName && (
          <li key={uuidv4()}>{getHighlightKeyword(dummyItem.description)}</li>
        )
    );
  };

  return (
    <>
      {props.query.length > 0 && (
        <section>
          {dummyTypes.map((dummyTypeItem) => (
            <ul key={uuidv4()}>
              <h3>{dummyTypeItem}</h3>
              {dummyItemLiElement(dummyTypeItem)}
            </ul>
          ))}
        </section>
      )}
    </>
  );
}
