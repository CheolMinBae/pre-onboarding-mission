import { SearchBoxItemData } from "../data.ts";
import SearchBoxSuggestion from "./SearchBoxSuggestion.tsx";
import React, { forwardRef, useEffect, useState } from "react";
import SearchContext from "../contexts/SearchContext.ts";

type SearchBoxInputProps = Omit<React.HTMLAttributes<HTMLInputElement>, "type">;

interface SearchBoxProps extends SearchBoxInputProps {
  items: SearchBoxItemData[];
  onSearch?: () => void;
}

const useDebouncedEffect = (
  effect: React.EffectCallback,
  delay: number,
  deps?: React.DependencyList,
) =>
  useEffect(() => {
    const timeout = setTimeout(() => effect(), delay);
    return () => clearTimeout(timeout);
  }, deps);

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(function (
  { items, onSearch, onInput, ...props },
  ref,
) {
  const [searchToken, setSearchToken] = useState([] as string[]);
  const [value, setValue] = useState("");
  useDebouncedEffect(
    () => {
      const tokenized = value.split(" ").sort((a, b) => b.length - a.length);
      setSearchToken(tokenized);
    },
    500,
    [value],
  );
  return (
    <SearchContext.Provider value={searchToken}>
      <div className="search-box-wrapper">
        <input
          type="search"
          className="search-box"
          onInput={(event) => {
            setValue(event.currentTarget.value);
            if (onInput) onInput(event);
          }}
          {...props}
          ref={ref}
        />
        <SearchBoxSuggestion items={items} />
      </div>
    </SearchContext.Provider>
  );
});

export default SearchBox;
