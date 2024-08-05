import './App.css'
import {useState} from "react";
import {typeSectionData} from "./data.ts";
import {SearchItem} from "./components/SearchItem.tsx";

function App() {
  const [value, setValue] = useState('')

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input type='text' value={value} onChange={onChange} />
      {value.trim().length > 0 && Object.keys(typeSectionData).map(type => (
        <>
          <div>{type}</div>
          {typeSectionData[type].map((item, index) => (
            <SearchItem key={index} search={value} description={item.description}/>
          ))}
        </>
      ))}
    </div>
  )
}

export default App
