import { DummyType, DummyTypeValues } from '@type/data';

export const getTypeFirstIndex = (data: Array<DummyType>): Record<number, DummyTypeValues> => {
  const typeFirstIndexMap: Record<number, DummyTypeValues> = {};
  const typeFound: Record<DummyTypeValues, boolean> = { COMPANY: false, COUNTRY: false, PEOPLE: false, JOB: false };

  data.forEach((item, index) => {
    if (!typeFound[item.type]) {
      typeFirstIndexMap[index] = item.type;
      typeFound[item.type] = true;
    }
  });

  return typeFirstIndexMap;
};
