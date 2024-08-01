import buttonImg from "../assets/searchButton.png";

interface Props {
  onClick: () => void;
}

export default function SearchButton({ onClick }: Props) {
  return (
    <button
      type="button"
      className="relative bg-transparent w-10 h-10 border-none rounded-md focus:outline-none hover:bg-button-bg transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      <img
        src={buttonImg}
        alt="검색 버튼"
        className="absolute top-1 left-1 w-10/12 h-10/12 object-contain"
      />
    </button>
  );
}
