module.exports = {
  printWidth: 120, // 한 줄 최대 글자 수
  tabWidth: 2, // 탭 하나당 띄어쓰기 개수
  useTabs: false, // 탭 사용 X
  semi: true, // 세미콜론 사용
  singleQuote: true, // ' ' 사용
  jsxBracketSameLine: false, // JSX 태그를 사용하는경우에 > 기호를 한줄 내려서 사용
  bracketSpacing: true, // 객체의 양 끝 간격 사용
  arrowParens: 'always', // 매개변수가 1개 이더라도 소괄호 필수
  quoteProps: 'as-needed', // 객체의 속성 표현 시, 필요시에만 따옴표 적용
  importOrder: [
    '^@container/(.*)$',
    '^@layout/(.*)$',
    '^@components/(.*)$',
    '^@hooks/(.*)$',
    '^@util/(.*)$',
    '^@api/(.*)$',
    '^@store/(.*)$',
    '^@constant/(.*)$',
    '^@type/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
