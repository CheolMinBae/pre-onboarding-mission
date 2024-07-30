import Search from '../../assets/search_icon.svg';

interface SearchButtonProps {
  onSubmit: () => void;
}

function SearchButton(props: SearchButtonProps) {
  const { onSubmit } = props;

  return (
    <div
      onClick={onSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: '28px',
        height: '28px',
        borderRadius: '100%',
        cursor: 'pointer',
      }}
    >
      <img src={Search} alt="search" />
    </div>
  );
}

export default SearchButton;
