import React from "react";
import { DataListBox } from "../style/searchBar";
const TYPES = ["COMPANY", "COUNTRY", "PEOPLE", "JOB"];

const getPortions = (queryString, string) => {
  // 검색어와, 데이터리스트들.
  var results = [];
  if (queryString.length > 0) {
    var rgxp = new RegExp("(\\S*)?(" + queryString + ")(\\S*)?", "ig");

    const ret = string.replace(
      rgxp,
      (match, $1, $2, $3) =>
        ($1 || "") + '<b style="font-weight:bold;">' + $2 + "</b>" + ($3 || "")
    );

    return ret;
  }

  return results;
};

const SelectBox = ({ dataList, searchWord }) => {
  return (
    <DataListBox>
      <ul>
        {TYPES.map((TYPE) => (
          <ul key={TYPE}>
            <div
              dangerouslySetInnerHTML={{
                __html: getPortions(searchWord, TYPE),
              }}
            ></div>

            {dataList.map(
              (data) =>
                data.type === TYPE && (
                  <li
                    key={data.description}
                    dangerouslySetInnerHTML={{
                      __html: getPortions(searchWord, data.description),
                    }}
                  ></li>
                )
            )}
          </ul>
        ))}
      </ul>
    </DataListBox>
  );
};

export default SelectBox;
