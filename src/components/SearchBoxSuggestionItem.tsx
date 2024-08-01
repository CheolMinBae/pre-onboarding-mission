import { SearchBoxItemData } from "../data.ts";
import React, { forwardRef } from "react";

interface SearchBoxSuggestionItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  item: SearchBoxItemData;
}

const SearchBoxSuggestionItem = forwardRef<
  HTMLLIElement,
  SearchBoxSuggestionItemProps
>(function ({ item, ...props }, ref) {
  return (
    <li {...props} ref={ref}>
      {item.key}
    </li>
  );
});

export default SearchBoxSuggestionItem;
