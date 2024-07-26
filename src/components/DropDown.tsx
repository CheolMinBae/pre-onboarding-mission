import React, { Dispatch, SetStateAction } from 'react';
import { useDropDown } from '../hook/useDropDown';
import { groupedData } from '../const/data';

interface DropDownProps {
  searchTerm: string;
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  onSelectDescription: (description: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  searchTerm,
  isOpened,
  setIsOpened,
  onSelectDescription,
}) => {
  const dropdownRef = useDropDown({ isOpened, setIsOpened });

  const getHighlightedText = (text: string, term: string) => {
    if (!term) return <span>{text}</span>;
    const words = text.split(new RegExp(`(${term})`, 'gi'));
    return words.map((word, index) =>
      word.toLowerCase() === term.toLowerCase() ? (
        <strong key={index}>{word}</strong>
      ) : (
        <span key={index}>{word}</span>
      )
    );
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      {Object.keys(groupedData).map((type) => (
        <div key={type}>
          <div className="type-header">{type}</div>
          {groupedData[type].map((item) => (
            <div
              key={item.key}
              className="dropdown-item"
              onClick={() => onSelectDescription(item.description)}
            >
              {getHighlightedText(item.description, searchTerm)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
