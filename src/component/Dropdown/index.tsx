import { DummyType } from '@type/data';
import { DropdownContainer } from './index.style';
import Item from './Item';
import { getTypeFirstIndex } from '@util/data';
import SubTitle from './SubTitle';

interface DropdownProps {
  data: Array<DummyType>;
}

const Dropdown = ({ data }: DropdownProps) => {
  const indexMap = getTypeFirstIndex(data);

  return (
    <DropdownContainer>
      {data.map((d, idx) => (
        <>
          {indexMap[idx] && <SubTitle key={indexMap[idx]} type={indexMap[idx]} />}
          <Item key={idx} piece={d} />
        </>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
