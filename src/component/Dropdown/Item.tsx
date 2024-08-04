import { DummyType } from '@type/data';
import { ItemContainer } from './index.style';

interface ItemProps {
  piece: DummyType;
}

const Item = ({ piece }: ItemProps) => {
  return <ItemContainer>{piece.description}</ItemContainer>;
};

export default Item;
