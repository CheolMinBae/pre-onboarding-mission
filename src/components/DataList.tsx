import { dummy, Dummy } from "../assets/data";
import useDebounce from "../useDebounce";

interface Props {
  dataValue: string;
  setDataValue: (value: string) => void;
  isListVisible: boolean;
}

export default function DataList({
  dataValue,
  setDataValue,
  isListVisible,
}: Props) {
  const debounceSearchText = useDebounce(dataValue, 300);

  const handleItemClick = (item: Dummy) => {
    setDataValue(item.description);
  };

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const sortedDummy = dummy.sort((a, b) => {
    const aMatch = a.description
      .toLowerCase()
      .includes(debounceSearchText.toLowerCase());

    const bMatch = b.description
      .toLowerCase()
      .includes(debounceSearchText.toLowerCase());

    return bMatch ? (aMatch ? 0 : 1) : -1;
  });

  return (
    <>
      {debounceSearchText.length > 0 && isListVisible && (
        <ul
          role="listbox"
          className="custom-scrollbar w-full absolute bg-slate-50 mt-[1px] h-36 overflow-hidden overflow-y-scroll"
        >
          {sortedDummy.map((item) => (
            <li
              key={item.key}
              onClick={() => handleItemClick(item)}
              tabIndex={0}
              role="option"
              className="text-slate-800 text-start px-1 hover:bg-slate-200 cursor-pointer"
            >
              {getHighlightedText(item.description, debounceSearchText)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
