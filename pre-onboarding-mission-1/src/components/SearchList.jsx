import "./SearchList.css";
import { dummy } from "../../data/data";

const searchTextBold = (text, search) => {
  if (!search) return text;

  const regex = new RegExp(`(${search})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <b key={index}>{part}</b>
    ) : (
      part
    )
  );
};

const searchItemList = (search) =>
  dummy.map((item, index) => {
    const [cur, before] = [item, dummy[index - 1] || { type: null }];

    return (
      <div key={index}>
        {(cur.type !== before.type || index === 0) && (
          <div className="group">{item.type}</div>
        )}
        <div className="item" key={item.key}>
          {searchTextBold(item.description, search)}
        </div>
      </div>
    );
  });

function SearchList({ searchValue }) {
  return <div className="SearchList">{searchItemList(searchValue)}</div>;
}

export default SearchList;
