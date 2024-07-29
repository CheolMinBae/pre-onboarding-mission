import { CiSearch } from "react-icons/ci";
import {useState} from "react";
import {dummy} from "./data";

const COMPANY = 'COMPANY';
const PEOPLE = 'PEOPLE';
const JOB = 'JOB';

const App = ()=> {

    const [searchKeyword, setSearchKeyword] = useState("");
    const SearchList = ({group}) => {
        const listGroup = dummy.filter((item) => item.type === group);
        return (
            <div className={''}>
                <div className={'bg-blue-700 text-white'}>
                    {group}
                </div>
                <ul>
                    {listGroup.map(({description}, index) => {
                        const convertSpecialSymbol = (string) => {
                            return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                        };
                        const reg = new RegExp(
                            `(${convertSpecialSymbol(searchKeyword)})`,
                            "gi",
                        );
                        const separatedText = description.split(reg);
                        return (
                            <li key={index}>
                                {separatedText.map((text, index) => {
                                    if (text.match(reg)) {
                                        return <span key={index} style={{backgroundColor: "yellow"}}>{text}</span>;
                                    }
                                    return <span key={index}>{text}</span>;
                                })}
                            </li>
                        );
                    })}
                </ul>
            </div>
    )
    }


  return (
      <div className={'m-2 max-w-72'}>
      <div className={'flex gap-2 mb-4'}>
          <input
              className={'border-[1px] border-black rounded-sm w-64'}
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className={'border-[1px] rounded-full border-black w-6 h-6 flex items-center justify-center'}>
                <CiSearch />
          </button>
      </div>
          {
              searchKeyword ?<div
                  className={'overflow-scroll max-h-48 border-black border-[1px]'}
              >
                  <SearchList group={COMPANY}/>
                  <SearchList group={PEOPLE}/>
                  <SearchList group={JOB}/>
              </div>: null
          }
      </div>

  )
}
export default App;



