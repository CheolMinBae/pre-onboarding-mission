import {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import useDebounce from "../hook/useDebounce";

interface SearchProps {
  children: ReactNode;
}

interface SearchContextType {
  search: string;
  debouncedSearch: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextType>({
  search: "",
  debouncedSearch: "",
  onChange: () => {},
});

export const SearchContextProvider = ({ children }: SearchProps) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const debounce = useDebounce(() => {
    setDebouncedSearch(search);
  }, 300);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearch(value);
  };

  useEffect(() => {
    debounce();
  }, [search, debounce]);

  return (
    <SearchContext.Provider value={{ search, debouncedSearch, onChange }}>
      {children}
    </SearchContext.Provider>
  );
};
