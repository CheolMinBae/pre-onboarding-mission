import { data } from "./data.ts";
import type { DataType, GroupedSearchResults, KeywordType } from "./data.type.ts";

const tag = "[Store]";

class Store {
  data: DataType;

  constructor(data: DataType) {
    console.log(tag, "constructor");

    if (!data) throw "no storage";

    this.data = data;
  }

  search(keyword: string) {
    const lowerKeyword = keyword.toLowerCase()
    const groupedResults: GroupedSearchResults = {};

    data.keywordData.forEach((item) => {
      if (item.description.toLowerCase().indexOf(lowerKeyword) > -1) {
        const type = item.type as KeywordType;
        if (!groupedResults[type]) {
          groupedResults[type] = [];
        }
        groupedResults[type]!.push(item);
      }
    });



    return groupedResults;
  }

  testSearch() {
    const groupedResults: GroupedSearchResults = {};
    data.keywordData.forEach((item) => {
      const type = item.type as KeywordType;
      if (!groupedResults[type]) {
        groupedResults[type] = [];
      }
      groupedResults[type]!.push(item);
    }
    );
    return groupedResults;
  }
}

const store = new Store(data);
export default store;