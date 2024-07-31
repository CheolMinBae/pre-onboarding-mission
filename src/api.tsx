import { dummy } from "./data";

export interface IDummy {
  [type: string]: { description: string; key: string }[];
}

export function fetchDummy() {
  return dummy.reduce<IDummy>((acc, cur) => {
    const { type, ...props } = cur;
    acc[type] =
      typeof acc[type] === "undefined" ? [props] : [...acc[type], props];
    return acc;
  }, {});
}
