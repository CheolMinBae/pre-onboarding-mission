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
    <li {...props} ref={ref}>
      <legend>{label}</legend>
      <ul>{children}</ul>
    </li>
  );
});

export default SearchBoxSuggestionGroup;
