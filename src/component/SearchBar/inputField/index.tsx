import { FC } from "react";
import { InputStyle } from "./style";

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  onFocusChange: (isFocused: boolean) => void;
}

const InputField: FC<Props> = ({ value, onValueChange, onFocusChange }) => {
  const handleFocus = () => {
    onFocusChange(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      onFocusChange(false);
    }, 100);
  };

  return (
    <InputStyle
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default InputField;
