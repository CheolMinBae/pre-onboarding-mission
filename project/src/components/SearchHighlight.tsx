import styled from 'styled-components';

interface HighlightProps {
  content: string;
  query: string;
}

const SearchHighlight = ({ content, query }: HighlightProps) => {
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const splitting = content.split(new RegExp(`(${escapedQuery})`, 'gi'));

  return (
    <span>
      {splitting.map((char: string, idx: number) =>
        char.toLowerCase() === query.toLowerCase() ? <Highlighting key={idx}>{char}</Highlighting> : char
      )}
    </span>
  );
};

const Highlighting = styled.mark`
  font-weight: bold;
  background-color: transparent;
`;

export default SearchHighlight;
