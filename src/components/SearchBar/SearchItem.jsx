import splitIntoChars from '../../utils/splitIntoChars';

const SearchItem = ({ description, searchTerm }) => {
    return (
        <li className="group-item">
            {splitIntoChars(description, searchTerm)}
        </li>
    );
};

export default SearchItem;
