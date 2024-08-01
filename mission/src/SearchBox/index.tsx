import { dummy } from "../data.ts";
import boldText from "../utils/boldText.tsx";

interface useInputProps {
  text: string;
  handleChangeDescription: (description: string) => void;
}

const SearchBox = ({ text, handleChangeDescription }: useInputProps) => {
  return (
    <>
      <div className="w-60 h-[120px] border-2 overflow-scroll">
        {dummy.map((el, index) => (
          <div
            key={el.key}
            onClick={() => handleChangeDescription(el.description)}
          >
            {(index === 0 || el.type !== dummy[index - 1].type) && (
              <div className="bg-blue-600 text-white">{el.type}</div>
            )}
            <div
              tabIndex={0}
              className="cursor-pointer hover:bg-blue-300"
              onClick={() => handleChangeDescription(el.description)}
            >
              {boldText(el.description, text)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBox;
