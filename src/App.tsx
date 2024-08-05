import { useContext } from "react";
import List from "./components/list/List";
import Search from "./components/search/Search";
import { SearchContext } from "./context/SearchContext";

const App = () => {
  const { search } = useContext(SearchContext);

  return (
    <section>
      <Search />
      {search && <List />}
    </section>
  );
};

export default App;
