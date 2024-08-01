import { SearchBoxItemData } from "../data.ts";
import SearchBoxSuggestion from "./SearchBoxSuggestion.tsx";
import React, { forwardRef } from "react";

type SearchBoxInputProps = Omit<React.HTMLAttributes<HTMLInputElement>, "type">;

interface SearchBoxProps extends SearchBoxInputProps {
  items: SearchBoxItemData[];
  onSearch?: () => void;
}

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(function (
  { items, onSearch, ...props },
  ref,
) {
  return (
    <>
      <input type="search" {...props} ref={ref} />
      <SearchBoxSuggestion items={items} />
    </>
  );
});

export default SearchBox;
