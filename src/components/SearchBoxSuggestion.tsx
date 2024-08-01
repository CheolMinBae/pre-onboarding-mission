import "./SearchBoxSuggestion.css";
import { SearchBoxItemData } from "../data";
import SearchBoxSuggestionGroup from "./SearchBoxSuggestionGroup.tsx";
import SearchBoxSuggestionItem from "./SearchBoxSuggestionItem.tsx";
import React, { forwardRef } from "react";

interface SearchBoxSuggestionProps
  extends React.HTMLAttributes<HTMLUListElement> {
  items: SearchBoxItemData[];
}

const SearchBoxSuggestion = forwardRef<
  HTMLUListElement,
  SearchBoxSuggestionProps
>(function ({ items, ...props }, ref) {
  const groupItemsByType = (
    map: { [type: string]: SearchBoxItemData[] },
    item: SearchBoxItemData,
  ) => {
    if (map[item.type] === undefined) map[item.type] = [];
    map[item.type].push(item);
    return map;
  };
  const groupedItems: [string, SearchBoxItemData[]][] = Object.entries(
    items.reduce(groupItemsByType, {}),
  );
  return (
    <ul className="search-box-suggestion" {...props} ref={ref}>
      {groupedItems.map(([type, items]) => {
        return (
          <SearchBoxSuggestionGroup key={type} label={type}>
            {items.map((item) => (
              <SearchBoxSuggestionItem key={item.key} item={item} />
            ))}
          </SearchBoxSuggestionGroup>
        );
      })}
    </ul>
  );
});

export default SearchBoxSuggestion;
