import { dummy } from "../../data/data";

function SearchList() {
  return (
    <div>
      {dummy.map((item) => {
        return <div key={item.key}>{item.description}</div>;
      })}
    </div>
  );
}

export default SearchList;
