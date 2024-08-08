import { debounce } from "lodash";
import { ChangeEvent, useMemo, useState } from "react";

export interface useInputProps {
  text: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeDescription: (description: string) => void;
}

const useInput = (): useInputProps => {
  const [text, setText] = useState("");
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  const debounceSearch = useMemo(
    () =>
      debounce((value: string) => {
        setText(value);
      }, 300),
    []
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    debounceSearch(e.target.value);
  };

  const handleChangeDescription = (description: string) => {
    setText(description);
    setSelectedDescription(description);
  };

  return {
    text,
    handleChangeInput,
    handleChangeDescription,
  };
};

export default useInput;
