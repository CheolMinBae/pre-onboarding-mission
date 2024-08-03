# pre-onboarding-mission

![search-capture](https://github.com/user-attachments/assets/0797a281-0b7c-43df-bd18-62c4da66712e)

## 실행 방법

```
$ npm install
$ npm start
```

## 구현 기능

### 정규 표현식을 사용해 검색어 볼드 처리

> [!NOTE]
>
> 정규 표현식이란?
>
> - 문자 검색과 교체에 사용되는 패턴입니다. 문자열에서 특정 패턴을 검색하고, 추출하며 치환할 수 있습니다.
> - JavaScript에서는 RegExp 객체와 문자열 메서드를 조합해 정규표현식을 사용할 수 있습니다.
>
> 정규 표현식의 사용 이점
>
> - 정규 표현식은 복잡한 패턴 매칭과 텍스트 변환 작업을 적은 코드량으로 간단하게 처리할 수 있습니다.
> - 간단한 패턴으로 처리할 수 있어 가독성이 향상되고 유지보수에 유연하게 대응할 수 있습니다.

```tsx
// src/components/SearchResult.tsx

const getHighlightKeyword = (dummyDescription: string) => {
  if (!debouncedQuery.trim()) return <span>{dummyDescription}</span>;

  const regexp = new RegExp(`(${debouncedQuery})`, "gi");
  const keywordMatchResultArray = dummyDescription.split(regexp);

  return keywordMatchResultArray.map((keyword) =>
    regexp.test(keyword) ? (
      <strong key={uuidv4()}>{keyword}</strong>
    ) : (
      <span key={uuidv4()}>{keyword}</span>
    )
  );
};
```

- `trim()`을 통해 공백을 제거한 입력값이 빈 문자열일 경우 볼드 처리가 되지 않은 텍스트를 표시합니다.

- `new RegExp()` 정규 표현식 생성자의 패턴으로 dummy.js의 데이터 문자열을 설정하고, 플래그로 `'gi'`를 사용해 대소문자를 구분하지 않은 전체 문자열을 검색합니다.

- `split()`을 통해 입력된 검색어 중 dummy.js의 데이터 문자열과 일치하는 키워드를 분리한 배열을 생성한 후, 해당 배열의 각 문자열에 `regexp.test()`로 일치 여부를 확인하여 패턴과 일치한다면 `<strong>` 태그로 리턴해 볼드체로 처리합니다.

### 디바운스 적용

> [!NOTE]
>
> 디바운스란?
>
> - 특정 이벤트가 반복적으로 발생할 경우 생길 수 있는 성능 저하를 막기 위해 사용되는 방법 중 하나입니다.
> - 연속적으로 호출되는 함수 중 마지막 함수(또는 제일 처음)만 호출하는 방식으로 제어합니다.
>
> 디바운스의 사용 이점
>
> - 사용자가 키보드를 입력할 때마다 검색 결과를 갱신하려고 하면 검색 요청이 너무 자주 발생되어 성능에 악영향을 미칠 수 있습니다. 디바운스를 사용하면 사용자가 입력을 멈추고 일정 시간이 지나기 전까지는 이벤트 핸들러가 실행되지 않도록 할 수 있습니다.
> - 불필요한 함수 호출을 방지하고, 시스템 자원을 효율적으로 사용할 수 있습니다.

```tsx
// src/hooks/useDebounce.ts

const DEBOUNCE_TIMEOUT_SEC = 200;

export default function useDebounce(value: string) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, DEBOUNCE_TIMEOUT_SEC);

    return () => clearTimeout(debounceTimeout);
  }, [value]);

  return debouncedValue;
}

// src/components/SearchResult.tsx
const debouncedQuery = useDebounce(props.query);
```

- input 창에 검색어를 입력하면 `query` state가 변화하고 SearchResult 컴포넌트에서 useDebounce 훅을 호출합니다.

- 지연 시간을 `DEBOUNCE_TIMEOUT_SEC`로 변수화하여 관리합니다.

- useDebounce 훅에서 useEffect가 실행될 때마다 이전의 setTimeout 설정을 `clearTimeout`을 통해 제거하여 `value`값이 변경될 때마다 새로 타이머를 설정했습니다.

## 폴더 구조

```
📂 src
├──📂 components  // 입력창, 드롭다운 리스트로 컴포넌트 구분
│   ├── 📄 SearchForm.tsx
│   ├── 📄 search_form.module.scss
│   ├── 📄 SearchResult.tsx
│   └── 📄 search_result.module.scss
├──📂 hooks
│   └── 📄 useDebounce.ts // SearchResult 컴포넌트에 적용되는 훅
├──📂 styles // 전체적으로 사용되는 스타일링 코드
│   ├── 📄 _variables.scss // 스타일링 전역 변수
│   ├── 📄 app.scss // App.tsx 적용
│   └── 📄 reset.scss // default css 초기화
├──📂 types
│   └── 📄 search.type.ts // 검색 관련 타입 분리
├── 📄 App.tsx
└── 📄 main.tsx
```

<br />

## 사전미션 안내

![question](https://github.com/user-attachments/assets/3f139392-b269-4a4f-80e4-11eb82afd249)

위 영상의 기능과 동일한 기능의 화면을 만들어 주세요

### 주의사항

1. 화면을 구성하는데 필요한 데이터는 data.js 파일을 이용해 주세요
2. 프레임워크의 제약사항은 없습니다. vue, react, vanilla 등 본인이 원하는 내용으로 개발해 주세요
3. 검색버튼과 같이 특정 아이콘이 굳이 같을 필요는 없습니다. 전체적인 기능만 동일하면 됩니다.

### 제출방법

1. repo를 clone 받은 뒤 aug*onboarding*영문이름 으로 브랜치를 만들어주세요
2. 브랜치에서 작업 완료 후 master 브랜치로 PR을 남겨주세요
