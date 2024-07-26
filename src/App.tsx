import { useState } from 'react';

import './App.css'

import Button from './components/Button/Button'
import DropdownSearchBar from './components/DropdownSearchBar/DropdownSearchBar'

function App() {

  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className='container'>
      <div className="wrapper">
        <DropdownSearchBar value={searchValue} onChange={setSearchValue} />
        <Button>{"검색"}</Button>
      </div>
    </div>
  )
}

// 개발 필요기능 정리

// 인풋 포커스 시 드롭다운 - SearchBar 

// 드롭다운 내부
// 내부 스크롤 
// 데이터 타입별 정렬 - util
// 입력시 쓰로틀 - useThrottle
// 일치하는 문자열 강조 

// 검색 버튼

export default App
