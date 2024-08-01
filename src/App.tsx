import "./App.css";
import SearchBox from "./components/SearchBox.tsx";
import searchIcon from "./assets/search.svg";
import { dummy } from "./data.ts";
import Button from "./components/Button.tsx";

function App() {
  return (
    <>
      <h1>pre-onboarding-mission</h1>
      <main>
        <form
          autoComplete="off"
          aria-autocomplete="list"
          onSubmit={(event) => event.preventDefault()}
        >
          <SearchBox items={dummy} />
          <Button>{searchIcon}</Button>
        </form>
      </main>
    </>
  );
}

export default App;
