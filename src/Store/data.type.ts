export type KeywordType = "COMPANY" | "COUNTRY" | "PEOPLE" | "JOB"

export type KeywordDataType = {
  description: string;
  key: string;
  type: KeywordType;
}

export interface DataType {
  keywordData: KeywordDataType[]
}

export type GroupedSearchResults = {
  [key in KeywordType]?: KeywordDataType[];
}