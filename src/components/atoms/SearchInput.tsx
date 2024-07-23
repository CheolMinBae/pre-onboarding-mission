import React from 'react';

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ query, setQuery }: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="search"
      name="search"
      id="search"
      className="border-none rounded border-zinc-700 outline outline-1 focus:outline-2 w-200pxr"
      value={query}
      onChange={handleChange}
    />
  );
}
