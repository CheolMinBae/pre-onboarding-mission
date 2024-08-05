import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { dummy } from "../../assets/data";

interface highlightType {
  text: string;
  highlight: string;
}

interface DataType {
  description: string;
  key: string;
  type: string;
}

const createHighlightRegExp = (highlight: string) => {
  return new RegExp(`(${highlight})`, "gi");
};

const groupByType = (data: DataType[]) => {
  return data.reduce((acc, item) => {
    (acc[item.type] = acc[item.type] || []).push(item);
    return acc;
  }, {} as Record<string, DataType[]>);
};

const List = () => {
  const { debouncedSearch } = useContext(SearchContext);

  const highlightText = ({ text, highlight }: highlightType) => {
    const REGEXP = createHighlightRegExp(highlight);

    const parts = text.split(REGEXP);

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const groupedResults = groupByType(dummy);

  return (
    <div className="result">
      {Object.keys(groupedResults).map((type, index) => (
        <div key={index}>
          <h3>{type}</h3>
          <ul>
            {groupedResults[type].map((item, index) => (
              <li key={index}>
                <div>
                  {highlightText({
                    text: item.description,
                    highlight: debouncedSearch,
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;
