export type KeywordDataType = {
  description: string;
  key: string;
  type: "COMPANY" | "COUNTRY" | "PEOPLE" | "JOB";
}


export interface DataType {
  keywordData: KeywordDataType[]
}