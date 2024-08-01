import React, { forwardRef } from "react";

interface SearchBoxSuggestionGroupProps
  extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
  children: React.ReactNode;
}

const SearchBoxSuggestionGroup = forwardRef<
  HTMLLIElement,
  SearchBoxSuggestionGroupProps
>(function ({ label, children, ...props }, ref) {
  return (
    <li className="search-box-suggestion-group" {...props} ref={ref}>
      <legend className="search-box-suggestion-group-label">{label}</legend>
      <ul className="search-box-suggestion-group-list">{children}</ul>
    </li>
  );
});

export default SearchBoxSuggestionGroup;
