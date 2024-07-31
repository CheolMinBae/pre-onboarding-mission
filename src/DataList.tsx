import { fetchDummy } from "./api";
import styles from "./styles/app.module.css";
import { useEffect, useRef } from "react";

function DataList({ searchText }: { searchText: string }) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      searchText.length > 0
        ? listRef.current?.classList.remove(styles.hide)
        : listRef.current?.classList.add(styles.hide),
    [searchText]
  );
  useEffect(() => listRef.current?.classList.add(styles.hide), []);

  return (
    <div id={styles["list-container"]} ref={listRef}>
      {Object.entries(fetchDummy()).map(([type, props], idx) => (
        <ul key={idx}>
          <li>{type}</li>
          {props.map(({ description, key }) => {
            const regExp = new RegExp(`(${searchText})`, "i");
            return (
              <li key={key}>
                {description.split(regExp).map((str, idx) =>
                  regExp.test(str) ? (
                    <strong key={idx} className={styles.bold}>
                      {str}
                    </strong>
                  ) : (
                    <span key={idx}>{str}</span>
                  )
                )}
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}

export default DataList;
