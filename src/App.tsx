import "./App.css";
import SearchBox from "./components/SearchBox.tsx";
import { dummy } from "./data.ts";
import Button from "./components/Button.tsx";
import SearchIcon from "./icons/SearchIcon.tsx";

function App() {
  return (
    <>
      <h1>pre-onboarding-mission</h1>
      <main>
        <form
          id="search"
          autoComplete="off"
          aria-autocomplete="list"
          onSubmit={(event) => event.preventDefault()}
          style={{ width: "100%" }}
        >
          <SearchBox className="stick-right" items={dummy} />
          <Button className="stick-left">
            <SearchIcon />
          </Button>
        </form>
      </main>
    </>
  );
}

export default App;
