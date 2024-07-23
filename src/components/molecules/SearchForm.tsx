import React from 'react';

import SearchInput from '../atoms/SearchInput';
import ButtonSubmit from '../atoms/ButtonSubmit';

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchForm({ query, setQuery }: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex items-center gap-6pxr" onSubmit={handleSubmit}>
      <SearchInput query={query} setQuery={setQuery} />
      <ButtonSubmit />
    </form>
  );
}
