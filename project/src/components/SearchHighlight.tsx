import styled from 'styled-components';

interface HighlightProps {
  content: string;
  query: string;
  clickHandler: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SearchHighlight = ({ content, query, clickHandler }: HighlightProps) => {
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const splitting = content.split(new RegExp(`(${escapedQuery})`, 'gi'));

  return (
    <ListAnchor onClick={clickHandler}>
      {splitting.map((char: string, idx: number) =>
        char.toLowerCase() === query.toLowerCase() ? <Highlighting key={idx}>{char}</Highlighting> : char
      )}
    </ListAnchor>
  );
};

const ListAnchor = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const Highlighting = styled.mark`
  font-weight: bold;
  background-color: transparent;
`;

export default SearchHighlight;
