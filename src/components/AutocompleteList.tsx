import { dummy, Dummy } from '../data/data';
import AutocompleteItem from './AutocompleteItem';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function AutocompleteList({ query, setQuery }: Props) {
  const dataGroupedByTypeObj = dummy.reduce(
    (acc: { [key: string]: Dummy[] }, item: Dummy) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    },
    {}
  );

  const onItemClick = (value: string) => setQuery(value);

  return (
    <ul className='autocomplete-list' role='listbox'>
      {Object.keys(dataGroupedByTypeObj).map((type) => (
        <li key={type}>
          <h4 className='autocomplete-list-group-title'>{type}</h4>
          <ul>
            {dataGroupedByTypeObj[type].map(({ key, description }) => (
              <AutocompleteItem
                key={key}
                description={description}
                query={query}
                onItemClick={onItemClick}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default AutocompleteList;
