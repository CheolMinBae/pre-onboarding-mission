export interface ISearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  focusedListIndex: number;
  setFocusedListIndex: React.Dispatch<React.SetStateAction<number>>;
}
