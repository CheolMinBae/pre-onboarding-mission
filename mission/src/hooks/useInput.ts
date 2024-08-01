import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [text, setText] = useState("");
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
