import "./SearchBoxSuggestionGroup.css";
import React, { forwardRef } from "react";

interface SearchBoxSuggestionGroupProps
  extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
  children: React.ReactNode;
}

const SearchBoxSuggestionGroup = forwardRef<
  HTMLLIElement,
  SearchBoxSuggestionGroupProps
>(function ({ label, children, className, ...props }, ref) {
  return (
    <li
      className={`search-box-suggestion-group ${className ?? ""}`}
      {...props}
      ref={ref}
    >
      <p className="search-box-suggestion-group-label">{label}</p>
      <ul className="search-box-suggestion-group-list">{children}</ul>
    </li>
  );
});

export default SearchBoxSuggestionGroup;
