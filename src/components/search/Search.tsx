import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
  const { search, onChange } = useContext(SearchContext);
  return <input type="text" value={search} onChange={onChange} />;
};

export default Search;
