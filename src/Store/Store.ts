import { data } from "./data.ts";
import { DataType, KeywordDataType } from "./data.type.ts";



const tag = "[Store]";

class Store {
  data: DataType;
  searchKeyword: string;
  searchResult: KeywordDataType[];

  constructor(data: DataType) {
    console.log(tag, "constructor");

    if (!data) throw "no storage";

    this.data = data;

    this.searchKeyword = "";
    this.searchResult = [];
  }

  search(keyword: string) {
    this.searchKeyword = keyword;
    return this.data.keywordData.filter((product) =>
      product.description.includes(keyword)
    );
  }
}

const store = new Store(data);
export default store;