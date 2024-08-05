import { useState } from "react";
import "./App.css";
import { dummy } from "./assets/data";
import React from "react";

function SearchList({ searchKeyword }) {
  const [searchList, setSearchList] = useState(dummy);

  return (
    <div id="listContainer">
      <ul>
        {searchList.map((elem, idx) => {
          const regExp = new RegExp(searchKeyword, "gi");
          const htmlIncludedStr = elem.description.replace(
            regExp,
            `<strong>$&</strong>`
          );
          return (
            <React.Fragment key={elem.key}>
              {(idx == 0 ||
                (idx > 0 && searchList[idx - 1].type != elem.type)) && (
                <div className="type">{elem.type}</div>
              )}
              <li
                className="notAType"
                dangerouslySetInnerHTML={{ __html: htmlIncludedStr }}
              ></li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchList;
