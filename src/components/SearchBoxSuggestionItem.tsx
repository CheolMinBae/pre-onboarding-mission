import "./SearchBoxSuggestionItem.css";
import { SearchBoxItemData } from "../data.ts";
import React, { forwardRef, useContext, useMemo } from "react";
import SearchContext from "../contexts/SearchContext.ts";

interface SearchBoxSuggestionItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  item: SearchBoxItemData;
}

function getBoldedToken(
  searchTokens: string[],
  token: string,
): React.ReactNode[] {
  let result: React.ReactNode[] = [];
  let lastAddedPos = 0;
  for (let i = 0; i < token.length; i++) {
    const matchedLength = searchTokens.reduce((max, value) => {
      return token.toLowerCase().startsWith(value.toLowerCase(), i) &&
        value.length > max
        ? value.length
        : max;
    }, 0);
    if (matchedLength > 0) {
      if (lastAddedPos < i) {
        result.push(<>{token.substring(lastAddedPos, i)}</>);
        lastAddedPos = i;
      }
      result.push(<b>{token.substring(i, i + matchedLength)}</b>);
      lastAddedPos += matchedLength;
      i += matchedLength;
    }
  }
  if (lastAddedPos < token.length)
    result.push(<>{token.substring(lastAddedPos)}</>);
  return result;
}

const SearchBoxSuggestionItem = forwardRef<
  HTMLLIElement,
  SearchBoxSuggestionItemProps
>(function ({ item, className, ...props }, ref) {
  const searchTokens = useContext(SearchContext);
  const boldedDescription = useMemo(() => {
    const boldedTokens = item.description
      .split(" ")
      .map<React.ReactNode>((token) => getBoldedToken(searchTokens, token));
    return boldedTokens.reduce((prev, curr) => [prev, " ", curr]);
  }, [searchTokens]);
  return (
    <li
      className={`search-box-suggestion-item ${className ?? ""}`}
      {...props}
      ref={ref}
    >
      <button>{boldedDescription}</button>
    </li>
  );
});

export default SearchBoxSuggestionItem;
