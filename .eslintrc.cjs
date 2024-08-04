module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh', 'unicorn', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // prettier 룰에 어긋난 부분은 에러로 처리
    'react-refresh/only-export-components': ['warn', { allowConstantExport: false }], // 기본 설정

    curly: 'error', // 중괄호 생략 금지
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 2줄 이상 공백 금지
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }], // console.log() 경고
    'dot-notation': 'error', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 경고
    'no-var': 'error', // var 금지
    'no-empty': 'warn', // 중괄호 안에 아무것도 들어가있지 않으면 경고
    'react-hooks/exhaustive-deps': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'case', next: '*' },
      { blankLine: 'always', prev: '*', next: 'case' },
    ], // switch case문에서 case마다 줄바꿈
    'no-constant-condition': 'warn', // if문의 조건같은 부분에 true나 false같이 변하지 않는 값이 들어가는 것 금지
    'sort-vars': 'error', // 변수 알파벳 순서로 정렬
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }], // 문자열 내에 따옴표가 포함될 경우 템플릿 리터럴을 사용
    'prefer-template': 'error', // 문자열을 연결할 때 문자열 연결 연산자(+) 금지
    'arrow-parens': 'error', // 매개변수가 단일 매개변수라면 소괄호 생략
    'no-undef': 'off', // CommonJS, ES 모듈 관련 린트

    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
        ignore: ['App.tsx', /^vendor/i, '*.d.ts'],
      },
      {
        case: 'PascalCase',
        ignore: ['App.tsx', /^vendor/i, '*.d.ts'],
      },
    ], // 파일명은 camelCase
    'unicorn/prevent-abbreviations': 'off', // 축약어 사용피하도록 권장 off
    'unicorn/no-null': 'off', // null 값의 사용을 피하도록 권장 off
    'unicorn/prefer-query-selector': 'off', // querySelector메서드의 사용을 getElementById, getElementsByClassName 등 대신 권장하는 규칙 off
    'unicorn/better-regex': 'off', // 더 간결하고 명확한 정규 표현식을 사용하도록 권장하는 규칙 off
    'unicorn/no-useless-undefined': 'off', // 불필요하게 undefined를 반환하거나 설정하는 것을 방지하는 규칙 off
    'unicorn/prefer-module': 'off', // 축약어 사용 방지하는 규칙 off
    'unicorn/consistent-function-scoping': 'off', // arrow function만 허용하는 규칙 off
    'unicorn/no-array-for-each': 'off', // for each 대신 for...of 허용하는 규칙 off
    'unicorn/prefer-dom-node-text-content': 'off', // innerText 대신 textContent 허용하는 규칙 off
    'unicorn/import-style': 'off', // import 시 전체를 한꺼번에 가져오지 못하도록 하는 규칙 off
    'unicorn/filename-case': 'off',

    '@typescript-eslint/no-unused-vars': 'off', // 위 no-unused-vars와 중복
    '@typescript-eslint/no-shadow': 'error', // 같은 변수명 금지
    '@typescript-eslint/no-explicit-any': 'warn', // any 사용 지양
    '@typescript-eslint/naming-convention': [
      // 코드 전반 네이밍 컨벤션
      'error',
      { format: ['camelCase', 'PascalCase'], selector: 'variable', modifiers: ['exported'] },
      { format: ['camelCase'], selector: 'parameter', leadingUnderscore: 'allow' },
      { format: ['camelCase', 'PascalCase'], selector: 'variable', modifiers: ['exported'] },
      { format: ['camelCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['camelCase'], selector: 'typeAlias' },
    ],
  },
};
