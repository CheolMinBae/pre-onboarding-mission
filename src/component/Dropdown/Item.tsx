import { DummyType } from '@type/data';
import { ItemContainer } from './index.style';

interface ItemProps {
  value: string;
  piece: DummyType;
}

const Item = ({ value, piece }: ItemProps) => {
  const showRes = () => {
    let description = piece.description;
    let search = value.toLocaleLowerCase();
    let target = description.toLocaleLowerCase(); // target을 description의 소문자 버전으로 설정
    let parts = [];

    while (target.indexOf(search) >= 0) {
      const findIdx = target.indexOf(search);
      // 원래 description 문자열에서 인덱스에 해당하는 부분을 추출
      parts.push(<div key={parts.length}>{description.slice(0, findIdx)}</div>);
      parts.push(<b key={parts.length}>{description.slice(findIdx, findIdx + search.length)}</b>);

      // description과 target 업데이트
      description = description.slice(findIdx + search.length);
      target = target.slice(findIdx + search.length);
    }

    // 남은 부분 추가
    parts.push(<div key={parts.length}>{description}</div>);

    return parts;
  };

  return <ItemContainer>{showRes()}</ItemContainer>;
};

export default Item;
