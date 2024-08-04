import React from "react";
import { DataListBox } from "../style/searchBar";
const TYPES = ["COMPANY", "COUNTRY", "PEOPLE", "JOB"];

const SelectBox = ({ dataList, searchWord }) => {
  // <option value="apple">{word.description}</option>;
  return (
    <DataListBox>
      <ul>
        {TYPES.map((TYPE) => (
          <ul key={TYPE}>
            {TYPE}
            {dataList.map(
              (data) =>
                data.type === TYPE && (
                  <li key={data.description}>{data.description}</li>
                )
            )}
          </ul>
        ))}
      </ul>
    </DataListBox>
  );
};

export default SelectBox;
