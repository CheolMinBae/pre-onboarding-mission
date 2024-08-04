import { DummyType } from '@type/data';
import { ItemContainer } from './index.style';

interface ItemProps {
  value: string;
  piece: DummyType;
}

const Item = ({ value, piece }: ItemProps) => {
  return <ItemContainer>{piece.description}</ItemContainer>;
};

export default Item;
