import { useState, useEffect } from "react";

export default function useDebounce(value: string, delay: number) {
  const [desValue, setDesValue] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDesValue(value);
    }, delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [value, delay]);

  return desValue;
}
