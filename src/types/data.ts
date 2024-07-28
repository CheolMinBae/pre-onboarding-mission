export type DataType = {
    description: string;
    key: string;
    type: string;
}

export type ConvertedDataType = {
    [key: string]: DataType[]
}