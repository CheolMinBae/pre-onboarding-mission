import "./SearchBoxSuggestionItem.css";
import { SearchBoxItemData } from "../data.ts";
import React, { forwardRef, useContext, useMemo } from "react";
import SearchContext from "../contexts/SearchContext.ts";

interface SearchBoxSuggestionItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  item: SearchBoxItemData;
}

const SearchBoxSuggestionItem = forwardRef<
  HTMLLIElement,
  SearchBoxSuggestionItemProps
>(function ({ item, ...props }, ref) {
  const searchTokens = useContext(SearchContext);
  const boldedDescription = useMemo(() => {
    // TODO: Keyword bolding logic
    return item.description;
  }, [searchTokens]);
  return (
    <li className="search-box-suggestion-item" {...props} ref={ref}>
      {boldedDescription}
    </li>
  );
});

export default SearchBoxSuggestionItem;
