import { useMemo } from 'react';

import './App.css'

import Button from './components/Button/Button'
import DropdownSearchBar from './components/DropdownSearchBar/DropdownSearchBar'
import { convertData } from './utils/data';
import { dummy } from './datas/data';
import { ConvertedDataType } from './types/data';

function App() {

  const convertedData = useMemo(() => {
    return convertData(dummy)
  }, []);

  return (
    <div className='container'>
      <div className="wrapper">
        <DropdownSearchBar
          data={convertedData as ConvertedDataType}
          onSelectItem={(e) => console.log(e)}
        />
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
