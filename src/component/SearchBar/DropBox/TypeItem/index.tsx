import { FC } from "react";
import { ItemCover } from "./style";

interface Props {
  text: string;
}

const TypeItem: FC<Props> = ({ text }) => {
  return <ItemCover>{text}</ItemCover>;
};

export default TypeItem;
