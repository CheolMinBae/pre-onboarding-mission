import { useCallback } from 'react';

interface Props {
  description: string;
  query: string;
  onItemClick: (value: string) => void;
}

function AutocompleteItem({ description, query, onItemClick }: Props) {
  const highlightText = useCallback((text: string, query: string) => {
    if (!query.trim()) return text;

    const escapedHighlight = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedHighlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? <strong key={index}>{part}</strong> : part
    );
  }, []);

  const itemText = highlightText(description, query);

  return (
    <li className='autocomplete-list-group-item'>
      <button type='button' onClick={() => onItemClick(description)}>
        {itemText}
      </button>
    </li>
  );
}

export default AutocompleteItem;
