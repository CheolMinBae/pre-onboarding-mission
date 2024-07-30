import { useState } from 'react';
import { dummy } from '../../data';
import { DummyItem } from '../../types';

interface AutocompleteProps {
  searchQuery: string;
}

function Autocomplete(props: AutocompleteProps) {
  const { searchQuery } = props;
  const [selected, setSelected] = useState('');
  const DUMMY_TYPES = [...new Set(dummy.map(item => item.type))];

  return (
    <div className="autocomplete-container">
      {DUMMY_TYPES.map(type => (
        <div>
          <div className="autocomplete-item-type">{type}</div>
          {dummy
            .filter(item => item.type === type)
            .map(item => (
              <AutocompleteItem
                key={item.key}
                item={item}
                selected={selected}
                setSelected={setSelected}
                searchQuery={searchQuery}
              />
            ))}
        </div>
      ))}
    </div>
  );
}

interface AutocompleteItemProps {
  item: DummyItem;
  selected: string;
  setSelected: (selected: string) => void;
  searchQuery?: string;
}

function AutocompleteItem(props: AutocompleteItemProps) {
  const { item, selected, setSelected, searchQuery } = props;
  const { key, description } = item;

  const getHilightedText = () => {
    if (!searchQuery) return <>{description}</>;

    const lowerCasedDescription = description.toLowerCase();
    const lowerCasedSearchQuery = searchQuery.toLowerCase();
    const searchQueryIdx = lowerCasedDescription.indexOf(lowerCasedSearchQuery);

    if (searchQueryIdx === -1) return <>{description}</>;
    const before = description.slice(0, searchQueryIdx);
    const hilighted = description.slice(searchQueryIdx, searchQueryIdx + searchQuery.length);
    const after = description.slice(searchQueryIdx + searchQuery.length);

    return (
      <>
        {before}
        <b>{hilighted}</b>
        {after}
      </>
    );
  };

  const handleSelect = () => {
    setSelected(key);
  };

  return (
    <div onClick={handleSelect} className={`autocomplete-item ${selected === key ? 'selected' : ''}`}>
      {getHilightedText()}
    </div>
  );
}

export default Autocomplete;
