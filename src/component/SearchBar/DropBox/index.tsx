import { FC, useMemo } from "react";
import { dummy } from "../../../assets/data";
import { Container } from "./style";
import TextItem from "./TextItem";
import TypeItem from "./TypeItem";

interface Props {
  value: string;
  isDrop: boolean;
  onValueChange: (value: string) => void;
}

interface ItemType {
  type: "type" | "item";
  key: string;
  description: string;
}

const DropBox: FC<Props> = ({ value, isDrop, onValueChange }) => {
  const itemData = useProcessedData();

  return (
    <Container isShow={isDrop}>
      {itemData.map((item) =>
        item.type === "type" ? (
          <TypeItem key={item.key} text={item.description} />
        ) : (
          <TextItem
            key={item.key}
            value={value}
            text={item.description}
            onValueChange={onValueChange}
          />
        )
      )}
    </Container>
  );
};

export default DropBox;

//dummy 데이터 가공
const useProcessedData = () => {
  return useMemo(() => {
    const result: ItemType[] = [];
    let lastType: string | null = null;

    dummy.forEach((item) => {
      if (item.type !== lastType) {
        result.push({
          type: "type",
          key: "type_" + item.type,
          description: item.type,
        });
        lastType = item.type;
      }

      result.push({
        type: "item",
        key: item.key,
        description: item.description,
      });
    });

    return result;
  }, []);
};
