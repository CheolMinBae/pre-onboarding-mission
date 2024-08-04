import { DummyTypeValues } from '@type/data';
import { SubTitleContainer } from './index.style';

interface SubTitleTypes {
    type : DummyTypeValues
}

const SubTitle = ({type}:SubTitleTypes) => {
  return <SubTitleContainer>{type}</SubTitleContainer>;
};

export default SubTitle;
