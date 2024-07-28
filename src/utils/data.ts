
import { ConvertedDataType, DataType } from "../types/data"

export const convertData = (datas: DataType[]) => {
    //...
    return datas.reduce((acc, cur) => {
        const type = cur.type;

        if (acc[type] === undefined) {
            acc[type] = [];
        }

        acc[type].push(cur);

        return acc;
    }, {} as ConvertedDataType)

}