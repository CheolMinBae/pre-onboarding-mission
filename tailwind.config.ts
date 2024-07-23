import range from 'lodash/range';

const pxToRem = (px: number, base: number = 16) => `${px / base}rem`;

const pxToRemFunc = (start: number, end: number): { [key: string]: string } => {
  return range(start, end).reduce(
    (acc, px) => {
      acc[`${px}pxr`] = pxToRem(px);
      return acc;
    },
    {} as { [key: string]: string }
  );
};

/** @type {import('tailwindcss').Config} */
const tailwindConfig: import('tailwindcss').Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(1, 1000),
      },
      inset: {
        ...pxToRemFunc(1, 1000),
      },
      fontSize: {
        ...pxToRemFunc(1, 1000),
      },
      lineHeight: {
        ...pxToRemFunc(1, 1000),
      },
      screens: {
        mobile: '360px',
        tablet: '768px',
        desktop: '1280px',
      },
    },
    fontFamily: {
      sans: ['Pretandard Variable', 'Pretendard', 'noto-sans-kr', 'sans-serif'],
    },
  },
  plugins: [],
};

export default tailwindConfig;
