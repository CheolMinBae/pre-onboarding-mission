const SearchInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="search-input"
        />
    );
};

export default SearchInput;
