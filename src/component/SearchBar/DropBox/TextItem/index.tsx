import { FC, useCallback } from "react";
import { TextField } from "./style";

interface Props {
  value: string;
  text: string;
  onValueChange: (value: string) => void;
}

const TextItem: FC<Props> = ({ value, text, onValueChange }) => {
  const onClickHandler = useCallback(() => {
    console.log(text);
    onValueChange(text);
  }, [onValueChange, text]);

  return (
    <TextField onClick={onClickHandler}>{highlightText(text, value)}</TextField>
  );
};

export default TextItem;

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const highlightText = (text: string, highlight: string) => {
  if (!highlight.trim()) {
    return text;
  }
  const escapedHighlight = escapeRegExp(highlight);
  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? <b key={index}>{part}</b> : part
  );
};
