import { DummyType } from '@type/data';
import { DropdownContainer } from './index.style';
import Item from './Item';
import { getTypeFirstIndex } from '@util/data';
import SubTitle from './SubTitle';

interface DropdownProps {
  value: string;
  data: Array<DummyType>;
}

const Dropdown = ({ value, data }: DropdownProps) => {
  const indexMap = getTypeFirstIndex(data);

  return (
    <DropdownContainer>
      {data.map((d, idx) => (
        <div key={idx}>
          {indexMap[idx] && <SubTitle type={indexMap[idx]} />}
          <Item value={value} piece={d} />
        </div>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
